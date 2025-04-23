"use client"

import { useEffect, useRef, useState } from "react"

export function AdvancedTechSymbol() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set initial dimensions
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.clientWidth,
        height: 500, // Fixed height for the visualization
      })
    }

    // Handle resize
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: 500,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || dimensions.width === 0) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharp rendering
    const dpr = window.devicePixelRatio || 1
    canvas.width = dimensions.width * dpr
    canvas.height = dimensions.height * dpr
    ctx.scale(dpr, dpr)

    // Center coordinates
    const centerX = dimensions.width / 2
    const centerY = dimensions.height / 2

    // Colors
    const primaryColor = "#3b82f6" // Blue
    const accentColor = "#0ea5e9" // Sky blue
    const dotColor = "#60a5fa" // Lighter blue
    const azureColor = "#0078d4" // Microsoft Azure blue
    const csharpColor = "#9b4f96" // C# purple
    const netColor = "#512bd4" // .NET purple
    const sqlColor = "#cc2927" // SQL Server red

    // Tech keywords
    const keywords = [
      { text: "C#", color: csharpColor, size: 20 },
      { text: ".NET", color: netColor, size: 22 },
      { text: "Azure", color: azureColor, size: 20 },
      { text: "ASP.NET", color: netColor, size: 18 },
      { text: "SQL", color: sqlColor, size: 18 },
      { text: "EF Core", color: netColor, size: 16 },
      { text: "Blazor", color: netColor, size: 16 },
      { text: "Web API", color: accentColor, size: 16 },
      { text: "DevOps", color: "#0078d7", size: 16 },
      { text: "Angular", color: "#dd0031", size: 18 },
      { text: "React", color: "#61dafb", size: 18 },
      { text: "Microservices", color: accentColor, size: 14 },
      { text: "Docker", color: "#2496ed", size: 16 },
      { text: "Kubernetes", color: "#326ce5", size: 14 },
      { text: "CI/CD", color: "#40a9ff", size: 16 },
    ]

    // Nodes for the network
    const nodes: Node[] = []
    const nodeCount = 80
    const maxDistance = Math.min(dimensions.width, dimensions.height) * 0.8

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = Math.pow(Math.random(), 0.5) * maxDistance * 0.8
      nodes.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: dotColor,
        alpha: Math.random() * 0.5 + 0.5,
      })
    }

    // Create keyword nodes
    const keywordNodes: KeywordNode[] = keywords.map((keyword, index) => {
      const angle = (index / keywords.length) * Math.PI * 2
      const distance = maxDistance * 0.4 + Math.random() * maxDistance * 0.2
      return {
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        text: keyword.text,
        color: keyword.color,
        size: keyword.size,
        angle,
        distance,
        orbitSpeed: (Math.random() * 0.0005 + 0.0002) * (Math.random() > 0.5 ? 1 : -1),
      }
    })

    // Code snippets
    const codeSnippets = [
      {
        language: "C#",
        color: csharpColor,
        code: [
          "public class Program",
          "{",
          "    public static async Task Main()",
          "    {",
          "        var builder = WebApplication.CreateBuilder(args);",
          "        builder.Services.AddControllers();",
          "        builder.Services.AddEndpointsApiExplorer();",
          "        builder.Services.AddSwaggerGen();",
          "        ",
          "        var app = builder.Build();",
          "        ",
          "        if (app.Environment.IsDevelopment())",
          "        {",
          "            app.UseSwagger();",
          "            app.UseSwaggerUI();",
          "        }",
          "        ",
          "        app.UseHttpsRedirection();",
          "        app.UseAuthorization();",
          "        app.MapControllers();",
          "        ",
          "        await app.RunAsync();",
          "    }",
          "}",
        ],
        x: centerX - maxDistance * 0.6,
        y: centerY - maxDistance * 0.4,
        opacity: 0.15,
        fontSize: 10,
      },
      {
        language: "C#",
        color: azureColor,
        code: [
          "public class WeatherForecastController : ControllerBase",
          "{",
          "    private static readonly string[] Summaries = new[]",
          "    {",
          '        "Freezing", "Bracing", "Chilly", "Cool",',
          '        "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"',
          "    };",
          "",
          '    [HttpGet(Name = "GetWeatherForecast")]',
          "    public IEnumerable<WeatherForecast> Get()",
          "    {",
          "        return Enumerable.Range(1, 5).Select(index => new WeatherForecast",
          "        {",
          "            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),",
          "            TemperatureC = Random.Shared.Next(-20, 55),",
          "            Summary = Summaries[Random.Shared.Next(Summaries.Length)]",
          "        })",
          "        .ToArray();",
          "    }",
          "}",
        ],
        x: centerX + maxDistance * 0.4,
        y: centerY - maxDistance * 0.3,
        opacity: 0.15,
        fontSize: 10,
      },
      {
        language: "Azure",
        color: azureColor,
        code: [
          "// Azure Function",
          '[FunctionName("ProcessOrder")]',
          "public static async Task<IActionResult> Run(",
          '    [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,',
          "    [CosmosDB(",
          '        databaseName: "ecommerce",',
          '        collectionName: "orders",',
          '        ConnectionStringSetting = "CosmosDBConnection")] IAsyncCollector<Order> ordersCollector,',
          "    ILogger log)",
          "{",
          '    log.LogInformation("Processing new order");',
          "    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();",
          "    var order = JsonConvert.DeserializeObject<Order>(requestBody);",
          "    ",
          "    await ordersCollector.AddAsync(order);",
          "    ",
          '    return new OkObjectResult(new { id = order.Id, message = "Order processed successfully" });',
          "}",
        ],
        x: centerX - maxDistance * 0.5,
        y: centerY + maxDistance * 0.3,
        opacity: 0.15,
        fontSize: 10,
      },
    ]

    // Animation variables
    let animationFrame: number
    let time = 0

    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Draw background glow
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        maxDistance * 0.1,
        centerX,
        centerY,
        maxDistance * 0.8,
      )
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, maxDistance * 0.8, 0, Math.PI * 2)
      ctx.fill()

      // Draw code snippets
      codeSnippets.forEach((snippet) => {
        ctx.font = `${snippet.fontSize}px monospace`
        ctx.textAlign = "left"
        ctx.globalAlpha = snippet.opacity * (0.7 + Math.sin(time * 2) * 0.3)
        ctx.fillStyle = snippet.color

        snippet.code.forEach((line, i) => {
          ctx.fillText(line, snippet.x, snippet.y + i * (snippet.fontSize + 2))
        })
      })

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.speedX
        node.y += node.speedY

        // Keep nodes within bounds
        const dx = node.x - centerX
        const dy = node.y - centerY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance > maxDistance) {
          const angle = Math.atan2(dy, dx)
          node.x = centerX + Math.cos(angle) * maxDistance
          node.y = centerY + Math.sin(angle) * maxDistance
          node.speedX = -node.speedX * 0.5
          node.speedY = -node.speedY * 0.5
        }

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const otherNode = nodes[j]
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance * 0.15) {
            ctx.strokeStyle = primaryColor
            ctx.globalAlpha = (1 - distance / (maxDistance * 0.15)) * 0.2
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        }

        // Draw node
        ctx.globalAlpha = node.alpha * (0.5 + Math.sin(time * 3 + i) * 0.5)
        ctx.fillStyle = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Update and draw keyword nodes
      keywordNodes.forEach((node) => {
        // Update position - orbit around center
        node.angle += node.orbitSpeed
        node.x = centerX + Math.cos(node.angle) * node.distance
        node.y = centerY + Math.sin(node.angle) * node.distance

        // Draw glow
        ctx.globalAlpha = 0.3
        ctx.fillStyle = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * 1.5, 0, Math.PI * 2)
        ctx.fill()

        // Draw node
        ctx.globalAlpha = 0.8 + Math.sin(time * 2) * 0.2
        ctx.fillStyle = node.color
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size * 0.6, 0, Math.PI * 2)
        ctx.fill()

        // Draw text
        ctx.globalAlpha = 1
        ctx.font = `bold ${node.size}px sans-serif`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(node.text, node.x, node.y)
      })

      // Draw center circle
      const centerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxDistance * 0.15)
      centerGradient.addColorStop(0, "rgba(59, 130, 246, 0.8)")
      centerGradient.addColorStop(1, "rgba(59, 130, 246, 0.4)")

      ctx.globalAlpha = 0.8 + Math.sin(time * 2) * 0.2
      ctx.fillStyle = centerGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, maxDistance * 0.15 * (0.9 + Math.sin(time * 3) * 0.1), 0, Math.PI * 2)
      ctx.fill()

      // Draw center text
      ctx.globalAlpha = 1
      ctx.font = `bold ${maxDistance * 0.06}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillStyle = "#ffffff"
      ctx.fillText("</> .NET", centerX, centerY - 10)

      ctx.font = `bold ${maxDistance * 0.03}px sans-serif`
      ctx.fillText("FULL STACK DEVELOPER", centerX, centerY + 15)

      // Draw orbital rings
      const ringCount = 3
      for (let i = 0; i < ringCount; i++) {
        const radius = maxDistance * (0.25 + i * 0.15)
        const speed = 0.001 * (i % 2 === 0 ? 1 : -1)

        ctx.strokeStyle = i % 2 === 0 ? primaryColor : accentColor
        ctx.lineWidth = 2 - i * 0.5
        ctx.globalAlpha = (0.3 - i * 0.05) * (0.8 + Math.sin(time * 2 + i) * 0.2)

        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.stroke()

        // Draw dashed ring
        ctx.setLineDash([5, 10])
        ctx.globalAlpha = (0.2 - i * 0.03) * (0.8 + Math.sin(time * 2 + i + 1) * 0.2)
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2)
        ctx.stroke()
        ctx.setLineDash([])
      }

      // Reset global alpha
      ctx.globalAlpha = 1

      // Continue animation
      animationFrame = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrame)
    }
  }, [dimensions])

  return (
    <div ref={containerRef} className="w-full">
      <div className="relative w-full h-[500px] overflow-hidden rounded-xl border border-primary/20 shadow-lg shadow-primary/10 bg-background/50 backdrop-blur-sm">
        <canvas
          ref={canvasRef}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-full"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  )
}

// Types
interface Node {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
}

interface KeywordNode {
  x: number
  y: number
  text: string
  color: string
  size: number
  angle: number
  distance: number
  orbitSpeed: number
}
