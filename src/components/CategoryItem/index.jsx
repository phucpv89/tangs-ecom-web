import React from "react";
import common, { t } from "../../_shared/common";

export default function CategoryItem({
  title,
  navigationLink,
  imageUrl,
  contentHtml,
}) {
  return (
    <div className="product-catgs__item">
      <h1>HELLO WORLD</h1>
      <a href={navigationLink}>
        <div className="product-catgs__item-img">
          <img
            src={imageUrl}
            alt={t(title)}
            onError={(e) => {
              common.OnImageErrorHandle(e, 369, 250);
            }}
          />
        </div>
        <div className="product-catgs__item-content">
          <h3>{t(title)}</h3>
          <p dangerouslySetInnerHTML={{ __html: t(contentHtml) }} />
        </div>
      </a>
    </div>
  );
}
