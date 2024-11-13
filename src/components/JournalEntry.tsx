import React from 'react';
import { Feather } from 'lucide-react';
import { EmotionIcon } from './EmotionIcon';
import type { Emotion } from '../utils/emotions';

type JournalEntryProps = {
  text: string;
  date: Date;
  emotion: Emotion;
  isJapanese: boolean;
};

export function JournalEntry({ text, date, emotion, isJapanese }: JournalEntryProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start gap-3">
        <div className="flex flex-col items-center gap-2">
          <Feather className="text-pink-400" size={18} />
          <div className="flex flex-col items-center gap-1.5 emotion-icon-wrapper">
            <EmotionIcon 
              icon={emotion.icon} 
              color={emotion.color} 
              size={24}
              intensity={emotion.intensity}
            />
            {emotion.secondary && (
              <EmotionIcon 
                icon={emotion.icon} 
                color={emotion.color} 
                size={18}
                intensity={emotion.secondary.intensity}
                showIntensity={false}
              />
            )}
          </div>
        </div>
        <div className="flex-1">
          <p className="text-gray-700 leading-relaxed mb-3">{text}</p>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className={`text-sm font-medium ${emotion.color}`}>
                {emotion.label}
                {emotion.intensity > 0 && (
                  <span className="ml-1 opacity-75">
                    {'★'.repeat(emotion.intensity)}
                    {'☆'.repeat(3 - emotion.intensity)}
                  </span>
                )}
              </span>
              {emotion.secondary && (
                <>
                  <span className="text-sm text-gray-400">+</span>
                  <span className={`text-sm font-medium ${emotion.color}`}>
                    {emotion.secondary.label}
                    <span className="ml-1 opacity-75">
                      {'★'.repeat(emotion.secondary.intensity)}
                      {'☆'.repeat(2 - emotion.secondary.intensity)}
                    </span>
                  </span>
                </>
              )}
            </div>
            <span className="text-sm text-gray-400">
              {date.toLocaleDateString(isJapanese ? 'ja-JP' : 'en-US')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}