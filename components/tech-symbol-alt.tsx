"use client"

import { useRef } from "react"

export function TechSymbolAlt() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
      {/* Main circle */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 animate-pulse-slow flex items-center justify-center">
        <div className="text-center">
          <div className="font-mono text-3xl md:text-4xl font-bold text-primary">&lt;/&gt;</div>
          <div className="text-sm md:text-base mt-1 text-primary/80">.NET Developer</div>
        </div>
      </div>

      {/* Orbiting elements */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/80 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold shadow-glow">C#</div>
      </div>

      <div className="absolute inset-0 animate-spin-reverse">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-blue-400/80 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold shadow-glow">Azure</div>
      </div>

      <div className="absolute inset-0 animate-spin-medium">
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/80 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold shadow-glow">API</div>
      </div>

      <div className="absolute inset-0 animate-spin-medium-reverse">
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-indigo-500/80 text-white rounded-full h-12 w-12 flex items-center justify-center font-bold shadow-glow">SQL</div>
      </div>

      {/* Orbital rings */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-slow"></div>
      <div className="absolute inset-[10%] rounded-full border-2 border-dashed border-blue-400/20 animate-spin-reverse"></div>
      <div className="absolute inset-[20%] rounded-full border-2 border-dashed border-cyan-500/20 animate-spin-medium"></div>

      {/* Floating particles */}
      <div className="absolute h-3 w-3 rounded-full bg-primary/50 top-[15%] left-[15%] animate-float"></div>
      <div className="absolute h-2 w-2 rounded-full bg-blue-400/50 top-[25%] right-[25%] animate-float-delay-1"></div>
      <div className="absolute h-4 w-4 rounded-full bg-cyan-500/50 bottom-[20%] left-[30%] animate-float-delay-2"></div>
      <div className="absolute h-2 w-2 rounded-full bg-indigo-500/50 bottom-[30%] right-[20%] animate-float-delay-3"></div>
      
      {/* Code snippets */}
      <div className="absolute -bottom-4 -left-4 text-[8px] font-mono text-primary/40 transform rotate-12 animate-pulse-slow">
        public class Program {<br />\
        &nbsp;&nbsp;static void Main() {<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine("Hello");<br />
        &nbsp;&nbsp;}<br />
        }
      </div>
      
      <div className="absolute -top-4 -right-4 text-[8px] font-mono text-blue-400/40 transform -rotate-12 animate-pulse-slow">
        async Task&lt;Data&gt; GetDataAsync() {<br />
        &nbsp;&nbsp;await _dbContext.Users<br />
        &nbsp;&nbsp;&nbsp;&nbsp;.Where(u => u.IsActive)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;.ToListAsync();<br />
        }
      </div>
      
      {/* Glowing effect */}
      <div className="absolute inset-[40%] rounded-full bg-primary/20 blur-xl animate-pulse-slow"></div>
    </div>
  )
}
