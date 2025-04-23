"use client"

export function TechSymbol3D() {
  const nbsp = "\u00A0" // Declare nbsp

  return (
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] perspective">
      {/* 3D Cube */}
      <div className="cube-container">
        <div className="cube animate-rotate-3d">
          <div className="cube-face cube-face-front">
            <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-primary to-blue-700 text-white">
              <span className="text-4xl font-bold">.NET</span>
            </div>
          </div>
          <div className="cube-face cube-face-back">
            <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
              <span className="text-4xl font-bold">Azure</span>
            </div>
          </div>
          <div className="cube-face cube-face-right">
            <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-cyan-500 to-blue-700 text-white">
              <span className="text-4xl font-bold">C#</span>
            </div>
          </div>
          <div className="cube-face cube-face-left">
            <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
              <span className="text-4xl font-bold">API</span>
            </div>
          </div>
          <div className="cube-face cube-face-top">
            <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-indigo-500 to-purple-700 text-white">
              <span className="text-4xl font-bold">SQL</span>
            </div>
          </div>
          <div className="cube-face cube-face-bottom">
            <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-blue-400 to-blue-800 text-white">
              <span className="text-4xl font-bold">Web</span>
            </div>
          </div>
        </div>
      </div>

      {/* Orbiting particles */}
      <div className="absolute inset-0">
        <div className="orbit orbit-1">
          <div className="orbit-particle bg-primary"></div>
        </div>
        <div className="orbit orbit-2">
          <div className="orbit-particle bg-blue-400"></div>
        </div>
        <div className="orbit orbit-3">
          <div className="orbit-particle bg-cyan-500"></div>
        </div>
      </div>

      {/* Code snippets */}
      <div className="absolute -bottom-8 -left-8 text-[8px] font-mono text-primary/60 transform rotate-12 animate-pulse-slow">
        public class Program {<br />\
        &nbsp;&nbsp;static void Main() {<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine("Hello");<br />
        &nbsp;&nbsp;}<br />
        }
      </div>
      
      <div className="absolute -top-8 -right-8 text-[8px] font-mono text-blue-400/60 transform -rotate-12 animate-pulse-slow">
        async Task&lt;Data&gt; GetDataAsync() {<br />
        &nbsp;&nbsp;await _dbContext.Users<br />
        &nbsp;&nbsp;&nbsp;&nbsp;.Where(u => u.IsActive)<br />
        &nbsp;&nbsp;&nbsp;&nbsp;.ToListAsync();<br />
        }
      </div>

      {/* Glowing effect */}
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl animate-pulse-slow"></div>
    </div>
  )
}
