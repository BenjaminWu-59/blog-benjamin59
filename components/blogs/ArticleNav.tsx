// To define the structure of Head from article.
interface Heading {
  tagName: string;
  text: string;
  children: Heading[];
}

interface HeadingNavProps {
  headings: Heading[];
}

const ArticleNav = ({ headings }: HeadingNavProps) => {
  const renderHeadings = (headings: Heading[]) => (
    <nav>
      {headings.map((heading, index) => (
        <div key={index} className="py-2">
          <a
            className="no-underline hover:underline text-xl"
            href={`#${heading.text.replace(/\s+/g, "-").toLowerCase()}`}
            onClick={(e) => {
              e.preventDefault();
              const targetId = heading.text.replace(/\s+/g, "-").toLowerCase();
              const targetElement = document.getElementById(targetId);

              if (targetElement) {
                const yOffset = -100; // 调整偏移量
                const y =
                  targetElement.getBoundingClientRect().top +
                  window.pageYOffset +
                  yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                window.history.pushState(null, "", `#${targetId}`);
              }
            }}
          >
            {heading.text}
          </a>
          {heading.children.length > 0 && renderHeadings(heading.children)}
        </div>
      ))}
    </nav>
  );

  return <nav>{renderHeadings(headings)}</nav>;
};

export default ArticleNav;