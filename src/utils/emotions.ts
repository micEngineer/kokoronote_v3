import { Smile, Frown, Angry, Star, Heart, Coffee, Cloud, Zap, Flame, Sun, Moon, Music } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Emotion = {
  icon: LucideIcon;
  color: string;
  label: string;
  intensity: number;
  secondary?: {
    label: string;
    intensity: number;
  };
};

type EmotionWord = {
  word: string;
  weight: number;
  contexts?: {
    boost: string[];
    reduce: string[];
  };
};

type EmotionRule = {
  words: EmotionWord[];
  icon: LucideIcon;
  color: string;
  contextMultiplier?: number;
};

const emotions: Record<string, EmotionRule> = {
  joy: {
    words: [
      { 
        word: '嬉しい', 
        weight: 2,
        contexts: {
          boost: ['とても', '本当に', '超'],
          reduce: ['少し', 'ちょっと']
        }
      },
      { 
        word: '楽しい', 
        weight: 2,
        contexts: {
          boost: ['最高に', 'すごく'],
          reduce: ['まあまあ']
        }
      },
      { word: '幸せ', weight: 3 },
      { word: 'happy', weight: 2 },
      { word: 'joy', weight: 2 },
      { 
        word: '最高', 
        weight: 3,
        contexts: {
          boost: ['本当に', 'マジで'],
          reduce: ['まあ']
        }
      },
      { word: 'wonderful', weight: 2 },
      { word: '笑顔', weight: 2 },
      { 
        word: '感謝', 
        weight: 2,
        contexts: {
          boost: ['心から', '深く'],
          reduce: []
        }
      }
    ],
    icon: Sun,
    color: 'text-yellow-500',
    contextMultiplier: 1.5
  },
  love: {
    words: [
      { 
        word: '大好き', 
        weight: 3,
        contexts: {
          boost: ['本当に', 'とても'],
          reduce: ['まあ']
        }
      },
      { word: 'love', weight: 3 },
      { 
        word: '愛してる', 
        weight: 4,
        contexts: {
          boost: ['心から', '永遠に'],
          reduce: []
        }
      },
      { word: '恋', weight: 2 },
      { word: 'かわいい', weight: 1 },
      { word: 'adorable', weight: 1 },
      { 
        word: '好き', 
        weight: 2,
        contexts: {
          boost: ['大', 'すごく'],
          reduce: ['まあ', 'ちょっと']
        }
      }
    ],
    icon: Heart,
    color: 'text-pink-500',
    contextMultiplier: 1.8
  },
  sadness: {
    words: [
      { 
        word: '悲しい', 
        weight: 2,
        contexts: {
          boost: ['とても', '本当に'],
          reduce: ['少し']
        }
      },
      { 
        word: '辛い', 
        weight: 2,
        contexts: {
          boost: ['すごく', 'とても'],
          reduce: ['ちょっと']
        }
      },
      { word: '苦しい', weight: 2 },
      { word: 'sad', weight: 2 },
      { word: 'pain', weight: 2 },
      { word: 'hurt', weight: 2 },
      { 
        word: '寂しい', 
        weight: 2,
        contexts: {
          boost: ['すごく', 'とても'],
          reduce: ['ちょっと']
        }
      },
      { word: 'lonely', weight: 2 },
      { word: '切ない', weight: 2 },
      { 
        word: '泣きたい', 
        weight: 3,
        contexts: {
          boost: ['本当に'],
          reduce: []
        }
      }
    ],
    icon: Cloud,
    color: 'text-blue-500',
    contextMultiplier: 1.3
  },
  anger: {
    words: [
      { 
        word: '怒り', 
        weight: 3,
        contexts: {
          boost: ['激', '物凄い'],
          reduce: []
        }
      },
      { word: '腹立たしい', weight: 2 },
      { word: 'angry', weight: 2 },
      { word: 'mad', weight: 2 },
      { 
        word: 'rage', 
        weight: 3,
        contexts: {
          boost: ['extreme', 'pure'],
          reduce: []
        }
      },
      { word: 'イライラ', weight: 2 },
      { 
        word: '許せない', 
        weight: 3,
        contexts: {
          boost: ['絶対に', '二度と'],
          reduce: []
        }
      },
      { word: '憎い', weight: 3 },
      { word: 'hate', weight: 3 },
      { 
        word: '嫌い', 
        weight: 2,
        contexts: {
          boost: ['大', 'すごく'],
          reduce: ['ちょっと']
        }
      }
    ],
    icon: Flame,
    color: 'text-red-500',
    contextMultiplier: 2.0
  },
  energy: {
    words: [
      { 
        word: 'やる気', 
        weight: 2,
        contexts: {
          boost: ['満々', 'すごく'],
          reduce: ['ない', '出ない']
        }
      },
      { 
        word: '頑張る', 
        weight: 2,
        contexts: {
          boost: ['絶対に', '必ず'],
          reduce: []
        }
      },
      { word: 'motivated', weight: 2 },
      { word: 'excited', weight: 2 },
      { word: 'エネルギー', weight: 2 },
      { 
        word: '元気', 
        weight: 2,
        contexts: {
          boost: ['すごく', 'とても'],
          reduce: ['ない']
        }
      },
      { word: 'energy', weight: 2 },
      { 
        word: '情熱', 
        weight: 3,
        contexts: {
          boost: ['燃える', '熱い'],
          reduce: []
        }
      }
    ],
    icon: Zap,
    color: 'text-amber-500',
    contextMultiplier: 1.4
  },
  peace: {
    words: [
      { 
        word: '穏やか', 
        weight: 2,
        contexts: {
          boost: ['とても', '心が'],
          reduce: []
        }
      },
      { word: '平和', weight: 2 },
      { word: 'peaceful', weight: 2 },
      { word: 'calm', weight: 2 },
      { 
        word: '安らぎ', 
        weight: 3,
        contexts: {
          boost: ['心の', '深い'],
          reduce: []
        }
      },
      { word: 'リラックス', weight: 2 },
      { word: '静か', weight: 1 },
      { 
        word: '落ち着く', 
        weight: 2,
        contexts: {
          boost: ['すごく', 'とても'],
          reduce: []
        }
      }
    ],
    icon: Moon,
    color: 'text-indigo-400',
    contextMultiplier: 1.2
  },
  inspiration: {
    words: [
      { 
        word: 'インスピレーション', 
        weight: 3,
        contexts: {
          boost: ['湧く', '溢れる'],
          reduce: []
        }
      },
      { word: 'inspired', weight: 2 },
      { word: 'creative', weight: 2 },
      { 
        word: 'アイデア', 
        weight: 2,
        contexts: {
          boost: ['良い', '素晴らしい'],
          reduce: ['ない']
        }
      },
      { word: '閃き', weight: 3 },
      { 
        word: '創造', 
        weight: 2,
        contexts: {
          boost: ['力', '的'],
          reduce: []
        }
      }
    ],
    icon: Music,
    color: 'text-purple-500',
    contextMultiplier: 1.6
  }
};

function calculateEmotionScore(text: string, emotionWords: EmotionWord[]): number {
  const text_lower = text.toLowerCase();
  
  return emotionWords.reduce((score, { word, weight, contexts }) => {
    const matches = text_lower.match(new RegExp(word.toLowerCase(), 'g')) || [];
    let wordScore = matches.length * weight;

    if (contexts) {
      const hasBoostContext = contexts.boost.some(ctx => 
        text_lower.includes(ctx.toLowerCase() + word.toLowerCase())
      );
      const hasReduceContext = contexts.reduce.some(ctx => 
        text_lower.includes(ctx.toLowerCase() + word.toLowerCase())
      );

      if (hasBoostContext) wordScore *= 1.5;
      if (hasReduceContext) wordScore *= 0.5;
    }

    return score + wordScore;
  }, 0);
}

function findSecondaryEmotion(scores: Array<{ key: string; score: number }>, primaryKey: string): { label: string; intensity: number } | undefined {
  const secondaryScore = scores
    .filter(s => s.key !== primaryKey && s.score > 0)
    .sort((a, b) => b.score - a.score)[0];

  if (secondaryScore && secondaryScore.score >= 2) {
    const labels: Record<string, [string, string]> = {
      joy: ['喜び', 'Joy'],
      love: ['愛情', 'Love'],
      sadness: ['悲しみ', 'Sadness'],
      anger: ['怒り', 'Anger'],
      energy: ['活力', 'Energy'],
      peace: ['平穏', 'Peace'],
      inspiration: ['創造性', 'Inspiration']
    };

    return {
      label: labels[secondaryScore.key][0],
      intensity: Math.min(Math.ceil(secondaryScore.score / 2), 2)
    };
  }

  return undefined;
}

export function analyzeEmotion(text: string, isJapanese: boolean): Emotion {
  if (!text.trim()) {
    return {
      icon: Star,
      color: 'text-purple-500',
      label: isJapanese ? '平静' : 'Neutral',
      intensity: 0
    };
  }

  const scores = Object.entries(emotions).map(([key, emotion]) => ({
    key,
    score: calculateEmotionScore(text, emotion.words) * (emotion.contextMultiplier || 1),
    emotion
  }));

  const maxScore = Math.max(...scores.map(s => s.score));
  const dominantEmotion = scores.find(s => s.score === maxScore);

  if (maxScore === 0) {
    return {
      icon: Star,
      color: 'text-purple-500',
      label: isJapanese ? '平静' : 'Neutral',
      intensity: 0
    };
  }

  const labels: Record<string, [string, string]> = {
    joy: ['喜び', 'Joy'],
    love: ['愛情', 'Love'],
    sadness: ['悲しみ', 'Sadness'],
    anger: ['怒り', 'Anger'],
    energy: ['活力', 'Energy'],
    peace: ['平穏', 'Peace'],
    inspiration: ['創造性', 'Inspiration']
  };

  const [jpLabel, enLabel] = labels[dominantEmotion!.key];
  const secondary = findSecondaryEmotion(
    scores.map(s => ({ key: s.key, score: s.score })),
    dominantEmotion!.key
  );
  
  return {
    icon: dominantEmotion!.emotion.icon,
    color: dominantEmotion!.emotion.color,
    label: isJapanese ? jpLabel : enLabel,
    intensity: Math.min(Math.ceil(maxScore / 2), 3),
    secondary
  };
}