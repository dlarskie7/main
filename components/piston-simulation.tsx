"use client"

import { useMemo, useState } from "react"
import { RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

// A fixed reference product: P * V = k (constant temperature & amount of gas)
const K = 12

// Deterministic pseudo-random generator so server and client render identically
// (avoids hydration mismatches from Math.random()).
function seeded(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453
  return x - Math.floor(x)
}

// Molecule styles are precomputed as fixed-precision strings so the server and
// client render byte-identical markup (full-precision floats serialize
// differently across environments and cause hydration mismatches).
const MOLECULES = Array.from({ length: 26 }, (_, i) => {
  const x = seeded(i + 1)
  const y = seeded(i + 100)
  const delay = seeded(i + 200) * 3
  const duration = 2.5 + seeded(i + 300) * 2.5
  return {
    id: i,
    left: `${(8 + x * 84).toFixed(2)}%`,
    top: `${(8 + y * 84).toFixed(2)}%`,
    animation: `molecule-float ${duration.toFixed(2)}s ease-in-out ${delay.toFixed(2)}s infinite alternate`,
  }
})

export function PistonSimulation() {
  // Pressure is the user-controlled variable (in atm). Volume derives from Boyle's Law.
  const [pressure, setPressure] = useState(2)
  const volume = useMemo(() => K / pressure, [pressure])

  // Map volume (liters) to a visual height percentage of the cylinder.
  // Volume ranges roughly from 2 L (P=6) to 12 L (P=1).
  const minV = K / 6
  const maxV = K / 1
  const fillPct = 12 + ((volume - minV) / (maxV - minV)) * 80

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      {/* Cylinder visualization */}
      <div className="flex flex-col items-center">
        <div className="relative h-[360px] w-48 select-none">
          {/* Piston rod */}
          <div
            className="absolute left-1/2 top-0 z-20 -translate-x-1/2 transition-all duration-500 ease-out"
            style={{ height: `${100 - fillPct}%` }}
          >
            <div className="mx-auto h-full w-3 rounded-full bg-muted-foreground/40" />
          </div>

          {/* Cylinder body */}
          <div className="absolute inset-0 top-0 overflow-hidden rounded-b-xl rounded-t-md border-2 border-muted-foreground/30 bg-secondary/40">
            {/* Piston head */}
            <div
              className="absolute left-0 right-0 z-10 flex h-4 items-center justify-center transition-all duration-500 ease-out"
              style={{ top: `${100 - fillPct}%`, transform: "translateY(-100%)" }}
            >
              <div className="h-4 w-full bg-muted-foreground/70 shadow-md" />
            </div>

            {/* Gas region */}
            <div
              className="absolute bottom-0 left-0 right-0 overflow-hidden bg-primary/10 transition-all duration-500 ease-out"
              style={{ height: `${fillPct}%` }}
            >
              {MOLECULES.map((m) => (
                <span
                  key={m.id}
                  className="absolute size-2.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-primary)]"
                  style={{
                    left: m.left,
                    top: m.top,
                    animation: m.animation,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Pressure arrows indicator */}
          <div className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 text-xs font-medium text-accent">
            <div className="flex flex-col items-center gap-1">
              <span className="rotate-90">Force</span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">Sealed gas at constant temperature</p>
      </div>

      {/* Controls + readouts */}
      <div className="space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="pressure" className="text-sm font-medium text-foreground">
              Adjust the pressure
            </label>
            <span className="font-mono text-sm text-muted-foreground">{pressure.toFixed(1)} atm</span>
          </div>
          <input
            id="pressure"
            type="range"
            min={1}
            max={6}
            step={0.1}
            value={pressure}
            onChange={(e) => setPressure(Number.parseFloat(e.target.value))}
            className="h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-primary"
            aria-label="Gas pressure in atmospheres"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>Low (1 atm)</span>
            <span>High (6 atm)</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Readout label="Pressure (P)" value={`${pressure.toFixed(1)} atm`} accent />
          <Readout label="Volume (V)" value={`${volume.toFixed(2)} L`} />
        </div>

        <div className="rounded-xl border border-border bg-secondary/40 p-4">
          <p className="text-sm text-muted-foreground">Boyle&apos;s constant stays fixed:</p>
          <p className="mt-1 font-mono text-lg text-foreground">
            P &times; V = {(pressure * volume).toFixed(1)}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {pressure > 3
              ? "High pressure squeezes the molecules into a smaller volume."
              : "Lower pressure lets the gas expand to fill more volume."}
          </p>
        </div>

        <Button variant="outline" onClick={() => setPressure(2)} className="gap-2">
          <RotateCcw className="size-4" />
          Reset
        </Button>
      </div>
    </div>
  )
}

function Readout({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        accent ? "border-accent/40 bg-accent/10" : "border-primary/30 bg-primary/10"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
      <p className={`mt-1 font-mono text-2xl font-semibold ${accent ? "text-accent" : "text-primary"}`}>
        {value}
      </p>
    </div>
  )
}
