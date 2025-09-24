import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const CountdownPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-09-25T00:00:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        navigate("/scroll-challenge");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen suspense-bg floating-hearts flex items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="relative">
          <Heart 
            className="w-24 h-24 mx-auto text-primary animate-pulse-slow" 
            fill="currentColor" 
          />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-bounce-slow" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground animate-float">
          Something Special Coming In
        </h1>
        
        <div className="romantic-card max-w-lg mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl md:text-5xl font-mono text-primary animate-pulse-slow">
                {timeLeft.days}
              </div>
              <p className="text-sm text-muted-foreground">Days</p>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-mono text-primary animate-pulse-slow">
                {timeLeft.hours}
              </div>
              <p className="text-sm text-muted-foreground">Hours</p>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-mono text-primary animate-pulse-slow">
                {timeLeft.minutes}
              </div>
              <p className="text-sm text-muted-foreground">Minutes</p>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-mono text-primary animate-pulse-slow">
                {timeLeft.seconds}
              </div>
              <p className="text-sm text-muted-foreground">Seconds</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce-slow" style={{ animationDelay: "0s" }} />
          <div className="w-3 h-3 bg-secondary rounded-full animate-bounce-slow" style={{ animationDelay: "0.2s" }} />
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce-slow" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    </div>
  );
};

export default CountdownPage;