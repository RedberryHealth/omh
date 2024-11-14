// src/components/ResponsiveComponent.tsx

import { useWindowSize } from '@/hooks/useWindowSize';

const ResponsiveComponent: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <div>
      <p>
        {width !== undefined && width >= 768
          ? 'This is desktop view'
          : 'This is mobile view'}
      </p>
    </div>
  );
};

export default ResponsiveComponent;
