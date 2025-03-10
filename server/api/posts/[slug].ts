import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default defineEventHandler(async (event) => {
  const slug = event.context.params?.slug;
  if (!slug) {
    throw createError({
      statusCode: 400,
      message: "Slug parameter is missing",
    });
  }
  const postsDirectory = path.join(process.cwd(), "content");
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...data,
      content,
      slug,
    };
  } catch (error) {
    console.error(`포스트 ${slug} 읽기 중 오류 발생:`, error);
    throw createError({
      statusCode: 404,
      message: "포스트를 찾을 수 없습니다.",
    });
  }
});
