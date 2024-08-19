interface Heading {
  tagName: string;
  text: string;
  children: Heading[];
}

interface HeadingNavProps {
  headings: Heading[];
}

const ArticleNav = ({ headings }: HeadingNavProps) => {
  const renderHeadings = (headings: Heading[], level: number = 0) => (
    <nav>
      {headings.map((heading, index) => {
        // Calculate the padding based on the heading level
        const paddingLeftClass = `pl-${level * 4}`;
        const textSizeClass = `text-${2 - level}xl`;

        return (
          <div key={index} className={`my-5 ${paddingLeftClass}`}>
            <a
              className={`no-underline hover:underline text-xl ${textSizeClass}`}
              href={`#${heading.text.replace(/\s+/g, "-").toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                const targetId = heading.text.replace(/\s+/g, "-").toLowerCase();
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                  const yOffset = -100; // Adjust the offset
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
            {heading.children.length > 0 && renderHeadings(heading.children, level + 1)}
          </div>
        );
      })}
    </nav>
  );

  return <nav>{renderHeadings(headings)}</nav>;
};

export default ArticleNav;