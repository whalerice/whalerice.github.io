import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default defineEventHandler(async (event) => {
  try {
    const slug = event.context.params.slug;
    const filePath = path.join(process.cwd(), "content", `${slug}.md`);

    if (!fs.existsSync(filePath)) {
      throw new Error("Post not found");
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content,
      _path: `/posts/${slug}`,
    };
  } catch (error) {
    console.error("Error reading post:", error);
    throw createError({
      statusCode: 404,
      message: "Post not found",
    });
  }
});
