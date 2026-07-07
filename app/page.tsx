import Image from "next/image"
import { ArrowDown, ArrowUp, Beaker, FlaskConical } from "lucide-react"
import { PistonSimulation } from "@/components/piston-simulation"
import { PracticeProblem } from "@/components/practice-problem"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <FlaskConical className="size-4" />
            </span>
            <span className="font-heading text-lg font-semibold text-foreground">GasLab</span>
          </div>
          <span className="text-sm font-medium text-muted-foreground">Chemistry · Gas Laws</span>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-sm font-medium text-muted-foreground">
            <Beaker className="size-4 text-primary" />
            Interactive Lesson
          </span>
          <h1 className="mt-4 text-balance font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Boyle&apos;s Law
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The pressure of a gas is inversely proportional to its volume, as long as the temperature and amount
            of gas stay constant. Squeeze the gas and its volume shrinks; release it and the volume grows.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3">
              <ArrowUp className="size-5 text-accent" />
              <span className="text-sm text-foreground">Pressure up → Volume down</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3">
              <ArrowDown className="size-5 text-primary" />
              <span className="text-sm text-foreground">Pressure down → Volume up</span>
            </div>
          </div>
        </div>

        <div className="animate-fade-up overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <Image
            src="/boyles-hero.png"
            alt="Illustration of a gas being compressed by a piston, showing molecules packed tighter at higher pressure"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      {/* Formula */}
      <section className="mx-auto max-w-5xl px-4 pb-14">
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="font-heading text-2xl font-semibold text-foreground">The Formula</h2>
          <p className="mx-auto mt-2 max-w-lg text-muted-foreground">
            Boyle&apos;s Law connects the initial and final states of a gas.
          </p>
          <div className="mt-6 inline-block rounded-xl bg-primary/10 px-8 py-6">
            <p className="font-mono text-4xl font-bold tracking-tight text-primary">
              P₁V₁ = P₂V₂
            </p>
          </div>
          <dl className="mx-auto mt-6 grid max-w-xl grid-cols-2 gap-3 text-left sm:grid-cols-4">
            {[
              { term: "P₁", def: "Initial pressure" },
              { term: "V₁", def: "Initial volume" },
              { term: "P₂", def: "Final pressure" },
              { term: "V₂", def: "Final volume" },
            ].map((v) => (
              <div key={v.term} className="rounded-lg border border-border bg-secondary/40 p-3">
                <dt className="font-mono text-sm font-semibold text-primary">{v.term}</dt>
                <dd className="mt-0.5 text-sm text-muted-foreground">{v.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Simulation */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="mb-6 text-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground">Try It Yourself</h2>
            <p className="mt-2 text-muted-foreground">
              Drag the slider to change the pressure and watch the gas volume respond in real time.
            </p>
          </div>
          <PistonSimulation />
        </div>
      </section>

      {/* Worked Example */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Worked Example</h2>
          <p className="mt-3 leading-relaxed text-foreground">
            A gas has an initial pressure of <strong>2 atm</strong> and an initial volume of <strong>6 L</strong>.
            If the pressure is increased to <strong>3 atm</strong>, what is the new volume?
          </p>

          <ol className="mt-6 space-y-4">
            <Step n={1} title="Write the formula">
              <p className="font-mono text-sm text-muted-foreground">P₁V₁ = P₂V₂</p>
            </Step>
            <Step n={2} title="Substitute the given values">
              <p className="font-mono text-sm text-muted-foreground">
                P₁ = 2 atm, V₁ = 6 L, P₂ = 3 atm, V₂ = ?
              </p>
              <p className="font-mono text-sm text-muted-foreground">(2)(6) = (3)(V₂)</p>
            </Step>
            <Step n={3} title="Multiply the left side">
              <p className="font-mono text-sm text-muted-foreground">12 = 3 × V₂</p>
            </Step>
            <Step n={4} title="Divide both sides by 3">
              <p className="font-mono text-sm text-muted-foreground">V₂ = 12 ÷ 3 = 4 L</p>
            </Step>
          </ol>

          <div className="mt-6 rounded-xl border border-accent/40 bg-accent/10 p-5">
            <p className="text-sm font-medium uppercase tracking-wide text-accent">Final Answer</p>
            <p className="mt-1 font-heading text-2xl font-semibold text-foreground">The new volume is 4 liters (L)</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The pressure increased from 2 atm to 3 atm, so the volume decreased from 6 L to 4 L. This
              demonstrates Boyle&apos;s Law: when pressure increases, volume decreases, as long as the
              temperature stays the same.
            </p>
          </div>
        </div>
      </section>

      {/* Practice */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <PracticeProblem />
      </section>

      <footer className="border-t border-border py-8">
        <p className="text-center text-sm text-muted-foreground">
          GasLab · An interactive lesson on Boyle&apos;s Law
        </p>
      </footer>
    </main>
  )
}

function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-semibold text-primary-foreground">
        {n}
      </span>
      <div className="pt-1">
        <p className="font-medium text-foreground">{title}</p>
        <div className="mt-1 space-y-1">{children}</div>
      </div>
    </li>
  )
}
