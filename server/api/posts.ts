import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default defineEventHandler(async (event) => {
  try {
    // content 디렉토리 경로
    const postsDirectory = path.join(process.cwd(), "content");

    // 모든 .md 파일 가져오기
    const files = fs.readdirSync(postsDirectory);
    const posts = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        // 파일 내용 읽기
        const filePath = path.join(postsDirectory, file);
        const fileContents = fs.readFileSync(filePath, "utf8");

        // frontmatter 파싱
        const { data, content } = matter(fileContents);

        return {
          slug: file.replace(".md", ""),
          ...data,
          content,
          _path: `/posts/${file.replace(".md", "")}`,
        };
      })
      // 날짜순 정렬
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (error) {
    console.error("포스트 읽기 중 오류 발생:", error);
    return [];
  }
});
