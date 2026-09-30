---
layout: academic
permalink: /
title: "Zhenjie Lu"
description: "Zhenjie Lu — Ph.D. student at SUSTech, researching AI for EDA, multi-fidelity machine learning, and chip power modeling."
excerpt: "Research in AI for EDA, multi-fidelity machine learning, and chip power modeling."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="hero" id="about-me" aria-labelledby="intro-title">
  <div class="hero-copy">
    <h1 id="intro-title">Zhenjie Lu</h1>
    <p class="eyebrow">Ph.D. student · SUSTech</p>
    <div class="intro-text">
      <p>I am a Ph.D. student at the School of Microelectronics, <a href="https://www.sustech.edu.cn/">Southern University of Science and Technology (SUSTech)</a>, advised by <a href="https://www.sustech.edu.cn/zh/faculties/chenquan.html">Prof. Quan Chen</a>.</p>
      <p>I earned my Bachelor's degree in Automation from <a href="https://www.szu.edu.cn/">Shenzhen University</a>, with a minor in Computer Science and Technology.</p>
    </div>
    <div class="contact-links" aria-label="Contact and research profiles">
      <a class="contact-link" href="mailto:{{ site.author.email }}">Email</a>
      <a class="contact-link" href="{{ site.author.googlescholar }}">Google Scholar</a>
      <a class="text-link" href="{{ site.author.github }}">GitHub</a>
      <a class="text-link" href="{{ site.author.orcid }}">ORCID</a>
    </div>
  </div>
  <aside class="portrait-panel" aria-label="Portrait">
    <div class="portrait-frame"><img src="{{ site.author.avatar | relative_url }}" alt="Portrait of Zhenjie Lu" width="190" height="238" fetchpriority="high"></div>
  </aside>
</section>

<section class="research-strip" aria-labelledby="research-title">
  <h2 id="research-title">Research interests</h2>
  <ul class="research-topics">
    <li class="research-topic"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="8" y="8" width="16" height="16" rx="3"/><rect x="12" y="12" width="8" height="8" rx="1"/><path d="M12 3v5m8-5v5M12 24v5m8-5v5M3 12h5m-5 8h5m16-8h5m-5 8h5"/></svg><span>AI for Electronic<br> Design Automation</span></li>
    <li class="research-topic"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 4 12 7-12 7L4 11 16 4Z"/><path d="m4 17 12 7 12-7M4 23l12 7 12-7"/></svg><span>Multi-fidelity<br> machine learning</span></li>
    <li class="research-topic"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 5v22h23M9 21l6-8 5 3 7-10"/><circle cx="9" cy="21" r="1.5"/><circle cx="15" cy="13" r="1.5"/><circle cx="20" cy="16" r="1.5"/></svg><span>Model order reduction<br> &amp; chip power modeling</span></li>
  </ul>
</section>

<section class="content-section" id="publications" aria-labelledby="publications-title">
  <span class="legacy-anchor" id="-publications"></span>
  <div class="section-heading"><h2 id="publications-title">Publications</h2><a class="text-link" href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a></div>
  <div class="publication-list">
    <article class="publication featured-publication">
      <a class="paper-image" href="{{ '/images/CAMO_poster.png' | relative_url }}" aria-label="View CAMO research poster"><img src="{{ '/images/CAMO_poster.png' | relative_url }}" alt="CAMO convergence-aware multi-fidelity Bayesian optimization research poster" loading="lazy" width="400" height="260"></a>
      <div class="paper-content">
        <div class="paper-meta"><img class="conference-mark" src="{{ '/images/logos/neurips.png' | relative_url }}" alt="" width="44" height="32" loading="lazy"><span class="venue">NeurIPS 2025</span></div>
        <h3><a href="https://proceedings.neurips.cc/paper_files/paper/2025/hash/d2875f6d67841b7fe6c9ba55d9a6cab7-Abstract-Conference.html">CAMO: Convergence-Aware Multi-Fidelity Bayesian Optimization</a></h3>
        <p class="authors">Wei X. Xing <sup>#*</sup>, <strong>Zhenjie Lu <sup>#</sup></strong>, Akeel Shah</p>
        <a class="paper-link" href="https://openreview.net/pdf?id=9jONuWKoLj">PDF <span aria-hidden="true">↗</span></a>
      </div>
    </article>
    <article class="publication">
      <a class="paper-image" href="{{ '/images/MF-MOR.png' | relative_url }}" aria-label="View MF-MOR research figure"><img src="{{ '/images/MF-MOR.png' | relative_url }}" alt="MF-MOR model order reduction and chip power modeling research figure" loading="lazy" width="400" height="260"></a>
      <div class="paper-content">
        <div class="paper-meta"><img class="conference-mark" src="{{ '/images/logos/iccad2025.png' | relative_url }}" alt="" width="44" height="32" loading="lazy"><span class="venue">ICCAD 2025</span></div>
        <h3><a href="https://doi.org/10.1109/ICCAD66269.2025.11240823">MF-MOR: Multi-Fidelity Model Order Reduction for Many-Port Linear Systems in Chip Power Modeling</a></h3>
        <p class="authors"><strong>Zhenjie Lu</strong>, Hang Zhou, Quan Chen<sup>*</sup></p>
        <a class="paper-link" href="https://doi.org/10.1109/ICCAD66269.2025.11240823">Paper <span aria-hidden="true">↗</span></a>
      </div>
    </article>
    <article class="publication">
      <a class="paper-image" href="{{ '/images/EI-TR.png' | relative_url }}" aria-label="View EI-TR research figure"><img src="{{ '/images/EI-TR.png' | relative_url }}" alt="EI-TR exponential integrator framework for circuit transient analysis" loading="lazy" width="400" height="260"></a>
      <div class="paper-content">
        <div class="paper-meta"><img class="conference-mark" src="{{ '/images/logos/iccad2025.png' | relative_url }}" alt="" width="44" height="32" loading="lazy"><span class="venue">ICCAD 2025</span></div>
        <h3><a href="https://doi.org/10.1109/ICCAD66269.2025.11240715">EI-TR: A Versatile Exponential Integrator Framework for Transient Analysis of Generic Nonlinear Circuits</a></h3>
        <p class="authors">Hang Zhou, <strong>Zhenjie Lu</strong>, Quan Chen<sup>*</sup></p>
        <a class="paper-link" href="https://doi.org/10.1109/ICCAD66269.2025.11240715">Paper <span aria-hidden="true">↗</span></a>
      </div>
    </article>
    <article class="publication">
      <a class="paper-image" href="{{ '/images/iccad2024.png' | relative_url }}" aria-label="View ARO research figure"><img src="{{ '/images/iccad2024.png' | relative_url }}" alt="ARO autoregressive operator learning for multi-fidelity 3D-IC thermal analysis" loading="lazy" width="400" height="260"></a>
      <div class="paper-content">
        <div class="paper-meta"><img class="conference-mark" src="{{ '/images/logos/iccad2024.png' | relative_url }}" alt="" width="44" height="32" loading="lazy"><span class="venue">ICCAD 2024</span></div>
        <h3><a href="https://doi.org/10.1145/3676536.3676713">ARO: Autoregressive Operator Learning for Transferable and Multi-fidelity 3D-IC Thermal Analysis with Active Learning</a></h3>
        <p class="authors">Mingyue Wang, Yuanqing Cheng, Weiheng Zeng, <strong>Zhenjie Lu</strong>, Vasilis F. Pavlidis, Wei W. Xing</p>
        <a class="paper-link" href="https://doi.org/10.1145/3676536.3676713">Paper <span aria-hidden="true">↗</span></a>
      </div>
    </article>
  </div>
</section>

<section class="content-section news-section" id="news" aria-labelledby="news-title">
  <span class="legacy-anchor" id="-news"></span>
  <div class="section-heading"><h2 id="news-title">Latest news</h2></div>
  <ol class="news-list">
    <li><time datetime="2025-09">Sep 2025</time><p>One paper accepted at <strong>NeurIPS 2025</strong>! <span class="news-tag">NeurIPS</span></p></li>
    <li><time datetime="2025-06">Jun 2025</time><p>Two papers accepted at <strong>ICCAD 2025</strong>!</p></li>
    <li><time datetime="2024-06">Jun 2024</time><p>One paper accepted at <strong>ICCAD 2024</strong>!</p></li>
  </ol>
</section>

<section class="content-section" id="honors" aria-labelledby="honors-title">
  <span class="legacy-anchor" id="-honors-and-awards"></span>
  <div class="section-heading"><h2 id="honors-title">Honors &amp; awards</h2></div>
  <ul class="award-list">
    <li><time datetime="2024-05">May 2024</time><div><h3>Outstanding Undergraduate Graduate</h3><p>Shenzhen University</p></div></li>
    <li><time datetime="2023-12">Dec 2023</time><div><h3>National Second Prize</h3><p>5th National Integrated Circuit EDA Elite Challenge</p></div></li>
    <li><time datetime="2021-08">Aug 2021</time><div><h3>National First Prize <span class="small-tag">Top 2%</span></h3><p>National College Students Internet of Things Design Competition (Huawei Cup)</p></div></li>
  </ul>
</section>

<div class="background-grid">
  <section class="content-section" id="education" aria-labelledby="education-title">
    <span class="legacy-anchor" id="-educations"></span>
    <div class="section-heading"><h2 id="education-title">Education</h2></div>
    <div class="timeline">
      <article class="organization-entry">
        <div class="org-mark"><img src="{{ '/images/logos/sustech.png' | relative_url }}" alt="" width="48" height="48" loading="lazy"></div>
        <div class="organization-copy"><p class="date-range">Sep 2026 — Present</p><h3>Southern University of Science and Technology</h3><p>Ph.D. student · School of Microelectronics</p></div>
      </article>
      <article class="organization-entry">
        <div class="org-mark"><img src="{{ '/images/logos/sustech.png' | relative_url }}" alt="" width="48" height="48" loading="lazy"></div>
        <div class="organization-copy"><p class="date-range">Sep 2024 — Aug 2026</p><h3>Southern University of Science and Technology</h3><p>Master's · School of Microelectronics</p></div>
      </article>
      <article class="organization-entry">
        <div class="org-mark"><img src="{{ '/images/logos/szu.png' | relative_url }}" alt="" width="48" height="48" loading="lazy"></div>
        <div class="organization-copy"><p class="date-range">Sep 2020 — Jul 2024</p><h3>Shenzhen University</h3><p>Bachelor's in Automation<br>Minor in Computer Science and Technology</p><p class="school-detail">School of Mechanical, Electrical and Control Engineering</p></div>
      </article>
    </div>
  </section>
  <section class="content-section" id="experience" aria-labelledby="experience-title">
    <span class="legacy-anchor" id="-experiences"></span>
    <div class="section-heading"><h2 id="experience-title">Experience</h2></div>
    <div class="timeline">
      <article class="organization-entry">
        <div class="org-mark org-mark--wide"><img src="{{ '/images/logos/cadence.png' | relative_url }}" alt="" width="48" height="48" loading="lazy"></div>
        <div class="organization-copy"><p class="date-range">Mar 2026 — Jun 2026</p><h3>Cadence</h3><p>R&amp;D Intern · FastSPICE Group</p></div>
      </article>
      <article class="organization-entry">
        <div class="org-mark"><img src="{{ '/images/logos/beihang.jpg' | relative_url }}" alt="" width="48" height="48" loading="lazy"></div>
        <div class="organization-copy"><p class="date-range">Oct 2023 — Jun 2024</p><h3>Beihang University</h3><p>Research Assistant</p><p>Supervised by <a href="https://wxing.me/">Prof. Wei X. Xing <span aria-hidden="true">↗</span></a></p></div>
      </article>
    </div>
  </section>
</div>
