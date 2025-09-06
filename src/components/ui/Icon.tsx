import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use href={`/assets/sprites/icons.svg#${name}`} />
    </svg>
  );
};

export default Icon;
