import React from 'react';

const COMPANIES = [
  'AGB Campinas',
  'Unicamp',
  'Rede Centro-Norte',
  'La Dolce Vita',
  'DaraADV',
  'CE Vita',
] as const;

/** Quantas voltas da lista por faixa - o suficiente pra cobrir telas largas sem gap. */
const LOOPS_PER_STRIP = 6;

function buildStrip(stripId: string) {
  const items: { name: string; key: string }[] = [];
  for (let loop = 0; loop < LOOPS_PER_STRIP; loop++) {
    COMPANIES.forEach((name, i) => {
      items.push({ name, key: `${stripId}-${loop}-${i}` });
    });
  }
  return items;
}

const LogoRow = ({
  stripId,
  ariaHidden = false,
}: {
  stripId: string;
  ariaHidden?: boolean;
}) => (
  <ul className="trusted-marquee__group" aria-hidden={ariaHidden || undefined}>
    {buildStrip(stripId).map((item) => (
      <li key={item.key} className="trusted-marquee__item">
        <span className="trusted-marquee__name">{item.name}</span>
      </li>
    ))}
  </ul>
);

const TrustedCompanies: React.FC = () => {
  return (
    <div className="trusted-band">
      <p className="trusted-band__label">Empresas que confiam</p>

      <div className="trusted-marquee" aria-label="Empresas parceiras">
        <div className="trusted-marquee__track">
          <LogoRow stripId="a" />
          <LogoRow stripId="b" ariaHidden />
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
