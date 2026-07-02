export interface MotionProps {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  /**
   * If true, animation triggers when element enters viewport.
   * If false, it plays immediately (useful for Hero sections).
   */
  scrollTrigger?: boolean; 
}
