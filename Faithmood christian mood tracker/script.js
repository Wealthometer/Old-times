// Bible verses and quotes data
const moodData = {
    joyful: {
        verses: [
            {
                text: "This is the day that the Lord has made; let us rejoice and be glad in it.",
                reference: "Psalm 118:24"
            },
            {
                text: "The joy of the Lord is your strength.",
                reference: "Nehemiah 8:10"
            },
            {
                text: "Rejoice in the Lord always; again I will say, rejoice!",
                reference: "Philippians 4:4"
            },
            {
                text: "A cheerful heart is good medicine, but a crushed spirit dries up the bones.",
                reference: "Proverbs 17:22"
            },
            {
                text : "May the God of hope fill you with all joy and peace as you trust in Him.",
                reference : "Romans 15:13"
            },
            {
                text : "Ask and you will receive, and your joy will be complete.",
                reference : "John 16:24"
            },
            {
                text : "You make known to me the path of life; in your presence there is fullness of joy.",
                reference : "Psalm 16:11"
            },
            {
                text : "But the fruit of the Spirit is love, joy, peace, forbearance, kindness...",
                reference : "Galatians 5:22"
            },
            {
                text : "You will go out in joy and be led forth in peace; the mountains and hills will burst into song before you, and all the trees of the field will clap their hands.",
                reference : "Isaiah 55:12"
            }
            ,
            {
                text : "Though you have not seen him, you love him; and even though you do not see him now, you believe in him and are filled with an inexpressible and glorious joy.",
                reference : "1 Peter 1:8"
            }
        ],
        quotes: [
            "Joy is not the absence of trouble but the presence of Christ.",
            "Let your joy be in God alone, for He is the source of all true happiness.",
            "Christian joy is a gift of God flowing from a good conscience.",
            "Happiness is not something ready made. It comes from your own actions.",
            "Joy is the simplest form of gratitude.",
            "The more you praise and celebrate your life, the more there is in life to celebrate.",
            "Happiness is letting go of what you think your life is supposed to look like and celebrating it for everything that it is.",
            "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.",
            "Choose joy. Even when it’s hard.",
            "Joy does not simply happen to us. We have to choose joy and keep choosing it every day."
        ]
    },
    anxious: {
        verses: [
            {
                text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus.",
                reference: "Philippians 4:6-7"
            },
            {
                text: "Cast all your anxieties on him, because he cares for you.",
                reference: "1 Peter 5:7"
            },
            {
                text: "When anxiety was great within me, your consolation brought me joy.",
                reference: "Psalm 94:19"
            },
            {
                text: "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
                reference: "Matthew 6:34"
            },
            {
                text: "So do not fear, for I am with you; do not be dismayed, for I am your God.I will strengthen you and help you; I will uphold you with my righteous right hand.",
                reference: "Isaiah 41:10"
            },
            {
                text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives.Do not let your hearts be troubled and do not be afraid.",
                reference: "John 14:27"
            },
            {
                text: "Anxiety weighs down the heart, but a kind word cheers it up.",
                reference: "Proverbs 12:25"
            },
            {
                text: "Cast your cares on the Lord and He will sustain you; He will never let the righteous be shaken.",
                reference: "Psalm 55:22"
            },
            {
                text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged,for the Lord your God will be with you wherever you go.",
                reference: "Joshua 1:9"
            },
            {
                text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
                reference: "2 Timothy 1:7"
            }
        ],
        quotes: [
            "Worry does not empty tomorrow of its sorrow, it empties today of its strength.",
            "God's love is bigger than your biggest problem.",
            "Anxiety is the rust of life, destroying its brightness and weakening its power.",
            "You don’t have to control your thoughts. You just have to stop letting them control you.",
            "Worry does not empty tomorrow of its sorrow, it empties today of its strength.",
            "Nothing diminishes anxiety faster than action.",
            "Just when the caterpillar thought the world was over, it became a butterfly.",
            "Anxiety happens when you think you have to figure everything out at once.Breathe. You’re strong. You’ve got this one step at a time.",
            "You can’t stop the waves, but you can learn to surf.",
            "Sometimes the most important thing in a whole day is the rest we take between two deep breaths."
        ]
    },
    sad: {
        verses: [
            {
                text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
                reference: "Psalm 34:18"
            },
            {
                text: "He heals the brokenhearted and binds up their wounds.",
                reference: "Psalm 147:3"
            },
            {
                text: "Weeping may tarry for the night, but joy comes with the morning.",
                reference: "Psalm 30:5"
            }
        ],
        quotes: [
            "God is closest to those with broken hearts.",
            "Your current situation is not your final destination.",
            "Sometimes God allows what He hates to accomplish what He loves."
        ]
    },
    tired: {
        verses: [
            {
                text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
                reference: "Isaiah 40:31"
            },
            {
                text: "Come to me, all you who are weary and burdened, and I will give you rest.",
                reference: "Matthew 11:28"
            },
            {
                text: "He gives strength to the weary and increases the power of the weak.",
                reference: "Isaiah 40:29"
            }
        ],
        quotes: [
            "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit.",
            "God's strength is made perfect in our weakness.",
            "Sometimes the most spiritual thing you can do is take a nap."
        ]
    },
    grateful: {
        verses: [
            {
                text: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
                reference: "1 Thessalonians 5:18"
            },
            {
                text: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
                reference: "Psalm 100:4"
            },
            {
                text: "And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.",
                reference: "Colossians 3:17"
            }
        ],
        quotes: [
            "Gratitude turns what we have into enough.",
            "A thankful heart is not only the greatest virtue but the parent of all virtues.",
            "Count your blessings, not your problems."
        ]
    },
    broken: {
        verses: [
            {
                text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
                reference: "Psalm 34:18"
            },
            {
                text: "He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners.",
                reference: "Isaiah 61:1"
            },
            {
                text: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
                reference: "Psalm 73:26"
            }
        ],
        quotes: [
            "God uses broken things. It takes broken soil to produce a crop, broken clouds to give rain, broken grain to give bread, broken bread to give strength.",
            "Your brokenness is where His light shines through.",
            "God specializes in things fresh and firsthand. His plans for you this year may outshine those of the past."
        ]
    },
    peaceful: {
        verses: [
            {
                text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
                reference: "John 14:27"
            },
            {
                text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
                reference: "Isaiah 26:3"
            },
            {
                text: "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace.",
                reference: "Colossians 3:15"
            }
        ],
        quotes: [
            "Peace is not the absence of conflict, but the presence of God no matter what the conflict.",
            "When we focus on God, the scene changes.",
            "Peace comes not from the absence of trouble, but from the presence of God."
        ]
    },
    confused: {
        verses: [
            {
                text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
                reference: "Proverbs 3:5-6"
            },
            {
                text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
                reference: "James 1:5"
            },
            {
                text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, to give you hope and a future.",
                reference: "Jeremiah 29:11"
            }
        ],
        quotes: [
            "When you can't see His hand, trust His heart.",
            "God's delays are not God's denials.",
            "Sometimes God doesn't change your situation because He's trying to change your heart."
        ]
    }
};

// DOM Elements
const moodSelection = document.getElementById('moodSelection');
const encouragementDisplay = document.getElementById('encouragementDisplay');
const selectedMoodEl = document.getElementById('selectedMood');
const bibleVerseEl = document.getElementById('bibleVerse');
const verseReferenceEl = document.getElementById('verseReference');
const encouragingQuoteEl = document.getElementById('encouragingQuote');
const backBtn = document.getElementById('backBtn');
const newVerseBtn = document.getElementById('newVerseBtn');
const saveBtn = document.getElementById('saveBtn');
const themeToggle = document.getElementById('themeToggle');
const historyBtn = document.getElementById('historyBtn');
const historyModal = document.getElementById('historyModal');
const closeModal = document.getElementById('closeModal');
const historyContent = document.getElementById('historyContent');
const backgroundOverlay = document.getElementById('backgroundOverlay');

// State
let currentMood = '';
let currentVerseIndex = 0;
let currentQuoteIndex = 0;

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    attachEventListeners();
    loadHistory();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('faithmood-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('faithmood-theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Event Listeners
function attachEventListeners() {
    // Mood buttons
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => selectMood(btn.dataset.mood));
    });

    // Navigation buttons
    backBtn.addEventListener('click', showMoodSelection);
    newVerseBtn.addEventListener('click', showNewVerse);
    saveBtn.addEventListener('click', saveMoodEntry);

    // Theme and history
    themeToggle.addEventListener('click', toggleTheme);
    historyBtn.addEventListener('click', showHistory);
    closeModal.addEventListener('click', hideHistory);

    // Modal close on outside click
    historyModal.addEventListener('click', (e) => {
        if (e.target === historyModal) hideHistory();
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
}

function handleKeyboard(e) {
    if (e.key === 'Escape') {
        if (historyModal.style.display === 'block') {
            hideHistory();
        } else if (encouragementDisplay.style.display === 'block') {
            showMoodSelection();
        }
    }
}

// Mood Selection
function selectMood(mood) {
    currentMood = mood;
    currentVerseIndex = 0;
    currentQuoteIndex = 0;
    
    // Update background
    backgroundOverlay.className = `background-overlay mood-${mood}`;
    
    // Show encouragement
    showEncouragement();
    
    // Add to history
    addToHistory(mood);
}

function showEncouragement() {
    const data = moodData[currentMood];
    const verse = data.verses[currentVerseIndex];
    const quote = data.quotes[currentQuoteIndex];
    
    selectedMoodEl.textContent = `Feeling ${currentMood}`;
    bibleVerseEl.textContent = verse.text;
    verseReferenceEl.textContent = verse.reference;
    encouragingQuoteEl.textContent = quote;
    
    // Animate transition
    moodSelection.style.display = 'none';
    encouragementDisplay.style.display = 'block';
    encouragementDisplay.style.animation = 'fadeIn 0.5s ease';
}

function showMoodSelection() {
    encouragementDisplay.style.display = 'none';
    moodSelection.style.display = 'block';
    moodSelection.style.animation = 'fadeIn 0.5s ease';
    
    // Reset background
    backgroundOverlay.className = 'background-overlay';
}

function showNewVerse() {
    const data = moodData[currentMood];
    
    // Cycle through verses and quotes
    currentVerseIndex = (currentVerseIndex + 1) % data.verses.length;
    currentQuoteIndex = (currentQuoteIndex + 1) % data.quotes.length;
    
    const verse = data.verses[currentVerseIndex];
    const quote = data.quotes[currentQuoteIndex];
    
    // Animate content change
    bibleVerseEl.style.opacity = '0';
    encouragingQuoteEl.style.opacity = '0';
    
    setTimeout(() => {
        bibleVerseEl.textContent = verse.text;
        verseReferenceEl.textContent = verse.reference;
        encouragingQuoteEl.textContent = quote;
        
        bibleVerseEl.style.opacity = '1';
        encouragingQuoteEl.style.opacity = '1';
    }, 200);
}

// History Management
function addToHistory(mood) {
    const history = getHistory();
    const entry = {
        mood: mood,
        date: new Date().toISOString(),
        verse: moodData[mood].verses[currentVerseIndex],
        quote: moodData[mood].quotes[currentQuoteIndex]
    };
    
    history.unshift(entry);
    
    // Keep only last 50 entries
    if (history.length > 50) {
        history.splice(50);
    }
    
    localStorage.setItem('faithmood-history', JSON.stringify(history));
}

function getHistory() {
    const history = localStorage.getItem('faithmood-history');
    return history ? JSON.parse(history) : [];
}

function loadHistory() {
    // This function can be used to preload history if needed
    const history = getHistory();
    console.log(`Loaded ${history.length} history entries`);
}

function showHistory() {
    const history = getHistory();
    
    if (history.length === 0) {
        historyContent.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
                <i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.5;"></i>
                <p>No mood entries yet. Start tracking your faith journey!</p>
            </div>
        `;
    } else {
        historyContent.innerHTML = history.map(entry => {
            const date = new Date(entry.date);
            const formattedDate = date.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            return `
                <div class="history-item">
                    <div class="history-date">${formattedDate}</div>
                    <div class="history-mood">Feeling ${entry.mood}</div>
                    <div style="margin-top: 10px; font-size: 0.9rem; color: var(--text-secondary);">
                        "${entry.verse.text}" - ${entry.verse.reference}
                    </div>
                </div>
            `;
        }).join('');
    }
    
    historyModal.style.display = 'block';
}

function hideHistory() {
    historyModal.style.display = 'none';
}

function saveMoodEntry() {
    // Visual feedback for save action
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = '<i class="fas fa-check"></i> Saved!';
    saveBtn.style.background = '#10b981';
    
    setTimeout(() => {
        saveBtn.innerHTML = originalText;
        saveBtn.style.background = '';
    }, 2000);
    
    // Show notification
    showNotification('Mood entry saved to your faith journey! 💝');
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 12px;
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add fadeOut animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);

// Service Worker Registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}