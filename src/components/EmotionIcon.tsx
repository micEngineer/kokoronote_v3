import React from 'react';
import { LucideIcon } from 'lucide-react';

type EmotionIconProps = {
  icon: LucideIcon;
  color: string;
  size?: number;
  intensity?: number;
  showIntensity?: boolean;
};

export function EmotionIcon({ 
  icon: Icon, 
  color, 
  size = 18, 
  intensity = 0,
  showIntensity = true 
}: EmotionIconProps) {
  // 感情の強度に基づいてアニメーションとスタイルを調整
  const getAnimationClass = () => {
    switch (intensity) {
      case 3: return 'animate-pulse';
      case 2: return 'animate-bounce-gentle';
      case 1: return 'animate-float-gentle';
      default: return '';
    }
  };

  // 感情の強度に基づいて影の効果を調整
  const getShadowClass = () => {
    switch (intensity) {
      case 3: return 'drop-shadow-lg';
      case 2: return 'drop-shadow-md';
      case 1: return 'drop-shadow-sm';
      default: return '';
    }
  };

  const baseClass = `transition-all duration-300 ${color}`;
  const intensityClass = intensity > 0 ? `opacity-${Math.min(intensity * 25 + 25, 100)}` : '';
  const animationClass = getAnimationClass();
  const shadowClass = getShadowClass();
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <Icon 
        className={`${baseClass} ${intensityClass} ${animationClass} ${shadowClass}`} 
        size={size} 
        strokeWidth={intensity > 1 ? 2.5 : 2}
      />
      {showIntensity && intensity > 0 && (
        <div className="absolute -top-1 -right-1 flex gap-0.5">
          {Array.from({ length: intensity }).map((_, i) => (
            <span 
              key={i} 
              className={`inline-block w-1 h-1 rounded-full ${color} ${animationClass}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}