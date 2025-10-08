import React from "react";

const Title = ({
  title1,
  title2,
  titleStyle,
  title1Style,
  paraStyle,
  para,
}) => {
  return (
    <div className={titleStyle}>
      <h3 className={`${title1Style} h3 capitalize`}>
        {title1}
        <span className="font-light text-secondary">{title2}</span>
      </h3>

      {/* Decorative underline — should NOT contain the paragraph */}
      <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-secondary to-[#DDD9FF] mt-2"></div>

      {/* Paragraph below the underline */}
      {para !== undefined && (
        <p className={`${paraStyle} max-w-lg mt-4`}>
          {para ||
            "Explore our curated selection of modern furniture and home decor, designed to elevate your living space with style and comfort."}
        </p>
      )}
    </div>
  );
};

export default Title;
