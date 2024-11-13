import React, { useState } from 'react';
import { Heart, Save } from 'lucide-react';
import { EmotionIcon } from './components/EmotionIcon';
import { JournalEntry } from './components/JournalEntry';
import { analyzeEmotion } from './utils/emotions';
import type { Emotion } from './utils/emotions';

type Entry = {
  text: string;
  date: Date;
  emotion: Emotion;
};

function App() {
  const [entry, setEntry] = useState('');
  const [saved, setSaved] = useState<Entry[]>(() => {
    // サンプルデータ
    const sampleEntries: Entry[] = [
      {
        text: "今日のプレゼンテーションがとても上手くいって、本当に嬉しい！チームのみんなからも良い評価をもらえた。",
        date: new Date(2024, 2, 15),
        emotion: analyzeEmotion("今日のプレゼンテーションがとても上手くいって、本当に嬉しい！チームのみんなからも良い評価をもらえた。", true)
      },
      {
        text: "新しいプロジェクトのアイデアが次々と湧いてきて、とても創造的な気分。これからが楽しみ。",
        date: new Date(2024, 2, 14),
        emotion: analyzeEmotion("新しいプロジェクトのアイデアが次々と湧いてきて、とても創造的な気分。これからが楽しみ。", true)
      },
      {
        text: "大切な友人との約束をキャンセルされて、少し寂しい気持ち。でも、次は絶対に会えると信じている。",
        date: new Date(2024, 2, 13),
        emotion: analyzeEmotion("大切な友人との約束をキャンセルされて、少し寂しい気持ち。でも、次は絶対に会えると信じている。", true)
      },
      {
        text: "朝からずっとイライラが止まらない。締め切りに追われて、プレッシャーがすごい。",
        date: new Date(2024, 2, 12),
        emotion: analyzeEmotion("朝からずっとイライラが止まらない。締め切りに追われて、プレッシャーがすごい。", true)
      },
      {
        text: "週末に海辺で過ごした時間が素晴らしかった。波の音を聞いているだけで心が落ち着く。",
        date: new Date(2024, 2, 11),
        emotion: analyzeEmotion("週末に海辺で過ごした時間が素晴らしかった。波の音を聞いているだけで心が落ち着く。", true)
      },
      {
        text: "長年の夢だったマラソン完走を達成！本当に頑張って良かった。この達成感は忘れられない。",
        date: new Date(2024, 2, 10),
        emotion: analyzeEmotion("長年の夢だったマラソン完走を達成！本当に頑張って良かった。この達成感は忘れられない。", true)
      },
      {
        text: "大好きな人からサプライズプレゼントをもらって、心から感謝の気持ちでいっぱい。愛されているって幸せ。",
        date: new Date(2024, 2, 9),
        emotion: analyzeEmotion("大好きな人からサプライズプレゼントをもらって、心から感謝の気持ちでいっぱい。愛されているって幸せ。", true)
      },
      {
        text: "新しい趣味の絵画教室で、素晴らしい仲間たちと出会えた。創作意欲が溢れてくる。",
        date: new Date(2024, 2, 8),
        emotion: analyzeEmotion("新しい趣味の絵画教室で、素晴らしい仲間たちと出会えた。創作意欲が溢れてくる。", true)
      },
      {
        text: "今日は一日中、穏やかな気持ちで過ごせた。静かな幸せに包まれている感じ。",
        date: new Date(2024, 2, 7),
        emotion: analyzeEmotion("今日は一日中、穏やかな気持ちで過ごせた。静かな幸せに包まれている感じ。", true)
      },
      {
        text: "久しぶりに会った友人と深い話ができて、心が温かくなった。こんな素敵な友達がいて幸せ。",
        date: new Date(2024, 2, 6),
        emotion: analyzeEmotion("久しぶりに会った友人と深い話ができて、心が温かくなった。こんな素敵な友達がいて幸せ。", true)
      }
    ];
    return sampleEntries;
  });
  const [isJapanese, setIsJapanese] = useState(true);

  const currentEmotion = entry ? analyzeEmotion(entry, isJapanese) : null;

  const handleSave = () => {
    if (entry.trim()) {
      setSaved([
        {
          text: entry,
          date: new Date(),
          emotion: analyzeEmotion(entry, isJapanese)
        },
        ...saved
      ]);
      setEntry('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-slate-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <Heart className="text-pink-500" size={32} />
            <span>ココロノート</span>
          </h1>
          <p className="text-gray-600">
            {isJapanese ? "素直な気持ちを書き留めましょう" : "Write down your honest feelings"}
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsJapanese(!isJapanese)}
                className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                {isJapanese ? '🇯🇵 日本語' : '🇺🇸 English'}
              </button>
            </div>
            
            <textarea
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder={isJapanese ? 
                "今の気持ちを自由に書いてみましょう..." : 
                "Express your honest feelings..."
              }
              className="w-full h-40 p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-200 focus:border-pink-300 outline-none resize-none transition-all duration-200 text-gray-700"
            />
            
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center gap-2">
                {currentEmotion && (
                  <>
                    <span className="text-sm text-gray-600">
                      {isJapanese ? '感情分析: ' : 'Emotion: '}
                    </span>
                    <EmotionIcon 
                      icon={currentEmotion.icon} 
                      color={currentEmotion.color} 
                      size={20}
                      intensity={currentEmotion.intensity}
                    />
                    <span className="text-sm text-gray-600">
                      {currentEmotion.label}
                      {currentEmotion.intensity > 0 && ` (${currentEmotion.intensity})`}
                    </span>
                  </>
                )}
              </div>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                <Save size={18} />
                {isJapanese ? '保存する' : 'Save'}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {saved.map((note, index) => (
              <JournalEntry
                key={index}
                text={note.text}
                date={note.date}
                emotion={note.emotion}
                isJapanese={isJapanese}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;