import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Gift, ChevronDown } from "lucide-react";

const ScrollChallenge = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds of being on the page
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleGiftClick = () => {
    navigate("/gallery");
  };

  return (
    <div className="romantic-bg floating-hearts">
      {/* Initial section with scroll hint */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            Keep Scrolling... 
          </h1>
          <p className="text-xl text-muted-foreground">
            There's something magical waiting for you below ✨
          </p>
          <ChevronDown className="w-8 h-8 text-primary animate-bounce mx-auto" />
        </div>
      </div>

      {/* Spacer sections with troll messages */}
      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            Not yet... keep going! 💕
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            You're getting warmer... 🔥
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            Almost there! Just a little more... 😏
          </p>
        </div>
      </div>

      {/* Gift button section */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 space-y-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            Wow! You really scrolled all the way down! 😍
          </h2>
          <p className="text-lg text-muted-foreground">
            Your dedication deserves a reward...
          </p>
        </div>

        {showButton && (
          <button
            onClick={handleGiftClick}
            className="gift-button animate-slide-up flex items-center space-x-2 text-sm px-4 py-2"
          >
            <Gift className="w-4 h-4" />
            <span>Claim Your Surprise!</span>
          </button>
        )}

        <div className="text-center space-y-2 animate-fade-in">
          <p className="text-sm text-muted-foreground">
            That was quite the journey, wasn't it? 😄
          </p>
          <p className="text-xs text-muted-foreground">
            Hope your finger isn't too tired from all that scrolling!
          </p>
        </div>
      </div>

      {/* More troll sections below the button */}
      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            Wait... you're still scrolling? 😱
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            You have gone too far! Move back! ⬆️
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            Seriously, the button was way up there! 😅
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            Are you lost? The gift is above! 🎁⬆️
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            This is getting ridiculous... 🙄
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            Go back! There's nothing here! 🚫
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            Why are you still here? 🤨
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            Turn around! The surprise is waiting! 🔄
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            Last warning: GO BACK UP! ⚠️⬆️
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            Fine... if you're here, you're really dedicated! 🏆
          </p>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center">
        <div className="romantic-card animate-slide-up">
          <p className="text-2xl text-center text-foreground">
            But still... the button is UP THERE! 👆
          </p>
        </div>
      </div>

      {/* Extra padding */}
      <div className="h-32" />
    </div>
  );
};

export default ScrollChallenge;