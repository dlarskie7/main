"use client"

import { useState } from "react"
import { CheckCircle2, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PracticeProblem() {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Lightbulb className="size-5" />
        </span>
        <h3 className="font-heading text-xl font-semibold text-foreground">Practice Problem</h3>
      </div>

      <p className="mt-4 leading-relaxed text-foreground">
        A gas occupies <strong>10 L</strong> at a pressure of <strong>1.5 atm</strong>. If the pressure is
        increased to <strong>2.5 atm</strong>, what will the new volume be?
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "P₁", value: "1.5 atm" },
          { label: "V₁", value: "10 L" },
          { label: "P₂", value: "2.5 atm" },
          { label: "V₂", value: "?" },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-border bg-secondary/40 p-3 text-center">
            <p className="font-mono text-xs text-muted-foreground">{item.label}</p>
            <p className="mt-1 font-mono text-sm font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>

      {!revealed ? (
        <Button className="mt-6" onClick={() => setRevealed(true)}>
          Reveal Solution
        </Button>
      ) : (
        <div className="mt-6 animate-fade-up space-y-3 rounded-xl border border-primary/30 bg-primary/5 p-5">
          <p className="font-mono text-sm text-foreground">Use Boyle&apos;s Law: P₁V₁ = P₂V₂</p>
          <p className="font-mono text-sm text-muted-foreground">(1.5)(10) = (2.5)(V₂)</p>
          <p className="font-mono text-sm text-muted-foreground">15 = 2.5 × V₂</p>
          <p className="font-mono text-sm text-muted-foreground">V₂ = 15 ÷ 2.5</p>
          <div className="flex items-center gap-2 pt-1 text-primary">
            <CheckCircle2 className="size-5" />
            <p className="font-heading text-lg font-semibold">V₂ = 6 liters (L)</p>
          </div>
        </div>
      )}
    </div>
  )
}
