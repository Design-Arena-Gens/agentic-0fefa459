import Image from 'next/image';

const featuredCandies = [
  {
    name: 'Hexed Stardust Bites',
    tagline: 'Popping Nebula Crunch',
    description:
      'Crystallized galaxy clusters dusted in sour comet shimmer. Lights up your tongue like a neon rave.',
    flavors: ['Blue Galaxy', 'Plasma Berry', 'Ultraviolet Citrus'],
    price: '$18',
    image:
      'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Specter Cotton Swirls',
    tagline: 'Ghosted Sugar Clouds',
    description:
      'Weightless spun sugar with holographic shimmer that dissolves into smoky marshmallow dreams.',
    flavors: ['Blackberry Mist', 'Moon Vanilla', 'Phantom Peach'],
    price: '$14',
    image:
      'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Vamp Rush Gummies',
    tagline: 'Hyper Charged Bites',
    description:
      'Electrified gummy fangs pulsing with neon sour cores and energy sparkles. Bite boldly.',
    flavors: ['Blood Orange', 'Ultraviolet Cherry', 'Nightshade Lemon'],
    price: '$16',
    image:
      'https://images.unsplash.com/photo-1640613915149-652f0dad2de0?auto=format&fit=crop&w=800&q=80'
  }
];

const limitedDrops = [
  {
    title: 'Moonlit Mystery Box',
    description:
      'A curated crate of 8 experimental flavors, UV-reactive stickers, and a cryptic playlist link.',
    vibe: ['UV Reactive', 'Mystery Flavors', 'Collectible Stickers']
  },
  {
    title: 'Potion Lab Starter Kit',
    description:
      'Mix-and-match elixirs with color-shifting tonics. Includes reusable glass vials + recipes.',
    vibe: ['DIY Mixology', 'Aesthetic Glassware', 'Reacts to Music']
  }
];

const perks = [
  {
    stat: '24/7',
    label: 'Ghost Deliveries',
    description: 'Same-night drop offs by our spectral courier crew in select cities.'
  },
  {
    stat: '96%',
    label: 'Hype Rating',
    description: 'Across 8k+ candy connoisseurs on HexTok & SkeleGram who stan the vibe.'
  },
  {
    stat: '11',
    label: 'Secret Flavors',
    description: 'Unlocked when you join the Coven Rewards membership tier.'
  }
];

const marqueeWords = [
  'Neon Scream',
  'Hexed Sugar',
  'Spice the Night',
  'Gen Z Candy Coven',
  'Glow in the Dark',
  'Limited Drop',
  'Sip & Spell'
];

export default function Home() {
  return (
    <main>
      <div className="noise-overlay" />

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <span className="tag">Hexed Sugar · 2023 drop</span>
            <h1 className="hero-title">Halloween Candy, Re-coded for the Gen Z Coven.</h1>
            <p className="hero-description">
              Step into a neon nightmare of confectionary chaos. Curated treats, glow-up packaging, and
              algorithm-approved flavors crafted for creatures of the midnight scroll.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary">
                Shop the drop
              </button>
              <button type="button" className="btn btn-secondary">
                See the potion lab
              </button>
            </div>
          </div>

          <div className="floating-badge">
            <strong>#HexedAndSugared</strong>
            <span>Tag us on HexTok</span>
          </div>

          <div className="glow-ring" />
          <div className="orb-cluster">
            <div className="orb" />
            <div className="orb" />
            <div className="orb" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <header className="section-header">
            <span className="tag">Featured lineup</span>
            <h2 className="section-title">Night market exclusives</h2>
            <p className="section-description">
              Crafted in micro batches, each treat is wrapped in UV-reactive foil with NFC tags that unlock
              secret lore, playlists, and AR filters.
            </p>
          </header>

          <div className="grid grid-3">
            {featuredCandies.map((candy) => (
              <article className="card" key={candy.name}>
                <div className="card-header">
                  <div>
                    <h3 className="card-title">{candy.name}</h3>
                    <p className="card-subtitle">{candy.tagline}</p>
                  </div>
                  <div className="price-tag">{candy.price}</div>
                </div>

                <div className="card-media">
                  <Image
                    src={candy.image}
                    alt={candy.name}
                    width={640}
                    height={420}
                    style={{ objectFit: 'cover' }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="card-body">
                  <p>{candy.description}</p>
                  <div className="pill-group">
                    {candy.flavors.map((flavor) => (
                      <span key={flavor} className="pill">
                        {flavor}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <header className="section-header">
            <span className="tag">Limited drops</span>
            <h2 className="section-title">Summon-only experiences</h2>
            <p className="section-description">
              Our coven-coded releases arrive in encrypted drops. Turn on notifications and don’t ghost the
              next alert.
            </p>
          </header>

          <div className="grid grid-2">
            {limitedDrops.map((drop) => (
              <article className="card" key={drop.title}>
                <div className="card-header">
                  <h3 className="card-title">{drop.title}</h3>
                  <span className="flavor-badge">Limited</span>
                </div>
                <div className="card-body">
                  <p>{drop.description}</p>
                  <div className="pill-group">
                    {drop.vibe.map((v) => (
                      <span className="pill" key={v}>
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid-featured">
            {perks.map((perk) => (
              <div className="stat-card" key={perk.label}>
                <div className="stat-value">{perk.stat}</div>
                <div className="stat-label">{perk.label}</div>
                <p>{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <header className="section-header">
            <span className="tag">Coven loyalty</span>
            <h2 className="section-title">Join the midnight rewards</h2>
            <p className="section-description">
              Earn points every time you share, drip fit your unboxing, or attend our secret warehouse pop-ups.
              Redeem for exclusive flavors, merch, and AR filters that haunt your socials.
            </p>
          </header>

          <div className="card">
            <div className="card-body">
              <p>
                Scan the QR hidden in your candy pack to unlock badges, holographic avatars, and a portal to the
                Hexed Sugar Discord lounge. The deeper you go, the sweeter the spells.
              </p>
              <div className="hero-actions">
                <button type="button" className="btn btn-primary">
                  Activate membership
                </button>
                <button type="button" className="btn btn-secondary">
                  Peek the benefits
                </button>
              </div>
            </div>
          </div>

          <div className="marquee" aria-hidden="true">
            <div className="marquee-track" aria-hidden="true">
              {marqueeWords.concat(marqueeWords).map((word, index) => (
                <span key={`${word}-${index}`}>{word}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        made with moon magic · stay glowing · <a href="#">@hexedsugar</a>
      </footer>
    </main>
  );
}
