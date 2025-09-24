import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const CountdownPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds for demo, can be changed

  useEffect(() => {
    if (timeLeft === 0) {
      navigate("/scroll-challenge");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

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
        
        <div className="romantic-card max-w-md mx-auto">
          <div className="text-6xl md:text-8xl font-mono text-primary animate-pulse-slow">
            {timeLeft}
          </div>
          <p className="text-xl text-muted-foreground mt-4">
            {timeLeft > 1 ? "seconds" : "second"}
          </p>
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