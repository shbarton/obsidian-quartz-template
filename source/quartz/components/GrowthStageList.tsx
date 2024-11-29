// source/quartz/components/GrowthStageList.tsx
import React from "react";
const GrowthStageList: React.FC<{ fileData: any }> = ({ fileData }) => {
  const growthStages = fileData.frontmatter?.['Growth stage'];
  if (growthStages && growthStages.length > 0) {
    return (
      <ul className="growth-stage-list">
        {growthStages.map((stage: string, index: number) => (
          <li key={index}>
            <span className="growth-stage-item">{stage}</span>
          </li>
        ))}
      </ul>
    );
  }
  return null;
};
export default GrowthStageList;
