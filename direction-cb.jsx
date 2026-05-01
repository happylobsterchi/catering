// Catering Direction B — Full-bleed hero + stacked card sections
// Hero (photo overlay) → coral rail → 4 service cards → inquiry

function CateringDirectionB() {
  return (
    <div className="dirCB">
      <BarNav variant="navy" activeKey="catering" />

      {/* HERO — uses the "Four ways to roll" copy as the headline */}
      <section className="hero" data-screen-label="B · Hero">
        <div className="hero-bg">
          <img src="assets/catering-hero.png" alt="" />
        </div>
        <div className="bar-wrap hero-wrap">
          <div className="hero-claim">Full-service catering · Chicago</div>
          <h1>However you want your lobster — <em>we've got a lane for it.</em></h1>
          <p className="hero-sub">Same Maine lobster, same claws-up hospitality. Pick the format that fits your event, your venue, and your vibe.</p>
          <div style={{display:'flex', gap:14, flexWrap:'wrap', marginTop:36}}>
            <a className="bar-btn bar-btn-primary" href="#inquiry">Start your inquiry →</a>
            <a className="bar-btn bar-btn-secondary on-dark" href="#services">See all four services</a>
          </div>
        </div>
      </section>

      {/* Coral rail */}
      <div className="rail">
        <div className="rail-track">
          {[0,1].map(i => (
            <span key={i}>
              <span>Weddings</span><span className="dot"></span>
              <span>Corporate</span><span className="dot"></span>
              <span>Backyard blowouts</span><span className="dot"></span>
              <span>Brand activations</span><span className="dot"></span>
              <span>Holiday parties</span><span className="dot"></span>
              <span>Private homes</span><span className="dot"></span>
            </span>
          ))}
        </div>
      </div>

      {/* Services — straight into them, no intro band */}
      <section className="services" id="services">
        <div className="bar-wrap">
          <div className="svc-list">
            {/* 01 · The Bar — uses the Bar page lockup */}
            <article className="svc-card navy bar-feature" id="service-bar" data-screen-label="B · Service 1 — The Bar">
              <div className="svc-photo">
                <span className="svc-tag">Most immersive</span>
                <img src="assets/photo-live-service.jpg" alt="Happy Lobster Bar live service" />
              </div>
              <div className="svc-body">
                <div className="svc-num">01 · Live-station catering</div>
                <div className="bar-lockup" aria-label="The Happy Lobster Bar">
                  <span className="bar-lockup-word">
                    HAPPY<span className="bar-lockup-claw"><img src="assets/claw-only-burgundy.png" alt="" /></span>
                  </span>
                  <span className="bar-lockup-word">LOBSTER</span>
                  <span className="bar-lockup-script">Bar</span>
                </div>
                <p className="lede">Buy the bar. Be a hero. Chicago's only live lobster-roll bar, rolled up to your space — premium Maine lobster, buttered brioche, zero pretense.</p>
                <p>Brought on-site to venues, homes, rooftops, galleries. Wedding receptions, milestone dinners, brand activations where the food is the moment.</p>
                <ul>
                  <li>Lobster rolls built live in front of your guests</li>
                  <li>Caviar upgrade available</li>
                  <li>Full setup, service, and breakdown</li>
                  <li>Ideal for 50–300 guests</li>
                </ul>
                <div className="svc-cta">
                  <a className="bar-btn bar-btn-primary" href="https://happylobsterchicago.com/the-bar">Buy the Bar →</a>
                </div>
              </div>
            </article>

            {/* 02 · The Truck — Hammersmith all caps, no script */}
            <article className="svc-card reverse" id="service-truck" data-screen-label="B · Service 2 — The Truck">
              <div className="svc-photo">
                <span className="svc-tag">Mobile catering</span>
                <img src="assets/truck-rainbow.png" alt="Happy Lobster food truck" />
              </div>
              <div className="svc-body">
                <div className="svc-num">02 · Mobile catering</div>
                <h3 className="hammer">CHICAGO'S PREMIER <span className="coral">FOOD</span> TRUCK</h3>
                <p>From backyard blowouts to full-tilt events, the truck always shows up, claws up and ready to roll!</p>
                <ul>
                  <li>Fully customizable menu</li>
                  <li>No kitchen access required</li>
                  <li>Ideal for 75–1,000 guests</li>
                </ul>
                <div className="svc-cta">
                  <a className="bar-btn bar-btn-primary" href="https://happylobsterchicago.com/truck-catering">Book the Truck →</a>
                  <a className="svc-link" href="#inquiry">Request a quote →</a>
                </div>
              </div>
            </article>

            {/* 03 · Party Kits — Hammersmith all caps */}
            <article className="svc-card navy" id="service-kits" data-screen-label="B · Service 3 — Party Kits">
              <div className="svc-photo">
                <span className="svc-tag">Build-your-own</span>
                <img src="assets/catering-kit.jpg" alt="Happy Lobster roll party kit" />
              </div>
              <div className="svc-body">
                <div className="svc-num">03 · DIY, done right</div>
                <h3 className="hammer">LOBSTER ROLL <span className="coral">PARTY</span> KITS</h3>
                <p>Everything you need to build legendary Happy Lobster Rolls at home — the kind of spread people talk about long after the party ends. No cooking skills required.</p>
                <ul>
                  <li>Premium, fully-cooked Maine Lobster</li>
                  <li>Fresh Brioche + all the Happy Lobster fixins</li>
                  <li>Easy-to-follow instructions</li>
                  <li>Kits for 8 · 16 · 24 · 32 guests</li>
                </ul>
                <div className="svc-cta">
                  <a className="bar-btn bar-btn-primary" href="https://happylobsterchicago.com/party-kits">Order a kit →</a>
                </div>
              </div>
            </article>

            {/* 04 · Drop-off — Hammersmith all caps */}
            <article className="svc-card reverse" id="service-dropoff" data-screen-label="B · Service 4 — Drop-off">
              <div className="svc-photo">
                <span className="svc-tag">Delivery · pickup</span>
                <img src="assets/catering-dropoff.jpg" alt="Drop-off lobster roll catering" />
              </div>
              <div className="svc-body">
                <div className="svc-num">04 · Easy mode</div>
                <h3 className="hammer">DROP-OFF <span className="coral">CATERING</span></h3>
                <p>For meetings, team lunches, or anytime you want to upgrade the food without upping the stress.</p>
                <p>Choose delivery or pickup. Happy or Angry Lobster Rolls, plus chips and slaw, packed tight and ready to crush.</p>
                <ul>
                  <li>Delivery across Chicago · pickup in The Loop</li>
                  <li>$200 minimum · 24-hour notice</li>
                </ul>
                <div className="svc-cta">
                  <a className="bar-btn bar-btn-primary" href="https://happy-lobster.square.site/?location=LGWHHYQW7TMZ1">Place an order →</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section className="inquiry" id="inquiry" data-screen-label="B · Inquiry">
        <div className="bar-wrap">
          <div className="inquiry-grid">
            <div className="inquiry-lede">
              <div className="eye">Get rolling</div>
              <h2>Tell us about <span className="coral">it.</span></h2>
              <p>Whether you know exactly what you want or need help figuring out which lane fits — drop us the details. We'll come back with options, pricing, and a plan within one business day.</p>
              <div className="contact-card">
                <div className="row"><span className="lbl">Email</span><span className="val">hello@happylobsterchicago.com</span></div>
                <div className="row"><span className="lbl">Call</span><span className="val">(708) 497-9653</span></div>
                <div className="row"><span className="lbl">DM</span><span className="val">@happylobsterchi</span></div>
                <div className="row"><span className="lbl">HQ</span><span className="val">2300 S Throop St · Chicago</span></div>
              </div>
            </div>
            <InquiryForm variant="B" />
          </div>
        </div>
      </section>

      <BarFooter />
    </div>
  );
}

Object.assign(window, { CateringDirectionB });
