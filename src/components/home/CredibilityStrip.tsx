import { ShieldCheck, Ruler, HardHat, Award } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const values = [
  { icon: ShieldCheck, label: 'Quality' },
  { icon: Ruler, label: 'Precision' },
  { icon: HardHat, label: 'Safety' },
  { icon: Award, label: 'Commitment' },
];

export default function CredibilityStrip() {
  return (
    <section className="border-y border-border bg-white py-12">
      <div className="container-app">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.label} delay={i * 80}>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <value.icon className="h-6 w-6 text-sky-500" />
                <span className="text-sm font-bold uppercase tracking-wider text-navy-800">
                  {value.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
