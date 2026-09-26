# 🌳 Family Tree / Родословно дърво

**Live app:** https://petaryankov.github.io/Family-Tree/

*([Български по-долу ↓](#български) / Bulgarian below)*

---

## English

A free, private family-tree app that runs entirely in your browser — no
account, no server, no ads. Add people, link them as parents and spouses,
and the tree lays itself out automatically, generation by generation.

**Features**
- Automatic generational layout — parents, spouses, siblings, and children
  are positioned and connected automatically as you add people.
- Photos with face-centering (click a photo on the tree to see it
  full-size), birth/death dates with automatic age calculation, and an
  optional "family of origin" field.
- Search people by name, and find the relationship path between any two
  people — the connection is highlighted right on the tree.
- Undo for an accidental delete, and export the whole tree as a PNG
  image to share, in addition to Print.
- A quick summary of the tree (people, generations, oldest/youngest) at
  a glance.
- Works fully offline once installed, and can be installed like a real
  app on your phone or computer.
- Your data stays on your own device (saved in the browser) — nothing is
  uploaded anywhere. Use "Save to file" / "Load from file" to back up or
  move your tree between devices — loading a file merges it with what's
  already there instead of overwriting it, so corrections made on one
  device and new people added on another both survive.
- English and Bulgarian interface, light and dark theme.

### Built with

Plain HTML, CSS and JavaScript — a single self-contained file, no
frameworks, no build step, no backend, no database. Everything (layout,
styling, translations, the tree-layout algorithm, rendering) lives in
that one `index.html`.

- **Data & storage** — all data lives in the browser's `localStorage`,
  on your own device. Nothing is sent to a server, because there is no
  server.
- **Rendering** — the tree is laid out by a small custom algorithm
  (every parent ends up exactly one row above their children, spouses
  always share a row, etc.) and drawn as an SVG overlay for the
  connector lines.
- **Internationalization** — a translations dictionary switches every
  label between English and Bulgarian instantly, no reload needed.
- **Installable app (PWA)** — a Web App Manifest + a Service Worker let
  the browser install it like a native app and cache it for offline
  use, with an in-app banner when a newer version is available.

### Compatibility

The app itself (adding people, viewing the tree, saving/loading files)
works in any modern browser — Chrome, Edge, Firefox, Safari — on
practically any phone or computer from the last several years.

Installing it as an app (rather than just visiting the page) needs a
slightly newer browser:

- **Android** — Chrome 90+ (most phones from 2021 onward) shows an
  "Install app" option.
- **iPhone / iPad** — iOS 11.3+ supports "Add to Home Screen" as a
  full-screen app; iOS 16+ also supports offline caching via the
  service worker.
- **Desktop** — Chrome or Edge 90+ show an install icon in the address
  bar. Firefox has no native install button, but the site still works
  normally in the browser.

If a browser is too old to install it, the page still opens and works
normally as a website — you just won't get the home-screen icon or
offline mode.

### Privacy

There's no account, no analytics, no cookies, no tracking, and no
backend collecting anything — the app has no server at all. Every
person, photo and date you add stays only in your own browser's local
storage, on your own device. Nothing is uploaded, shared, or seen by
anyone else unless you explicitly export a file yourself (e.g. to send
it to a relative). The data is private by design, not just by policy.

### Install on your phone or computer

Open **https://petaryankov.github.io/Family-Tree/** and:

**Android (Chrome)**
1. Tap the menu (⋮) in the top right.
2. Tap **"Install app"** (or "Add to Home screen").
3. Confirm — the icon appears on your home screen like a normal app.

**iPhone / iPad (Safari)**
1. Tap the **Share** button (square with an arrow) in the toolbar.
2. Scroll down and tap **"Add to Home Screen"**.
3. Tap **Add**.

**Computer (Chrome or Edge)**
1. Open the link above.
2. Click the install icon in the address bar (a monitor with a ↓, or a ⊕).
3. Click **Install**. The app opens in its own window, without a browser bar.

> Once installed, the app works offline. Your data lives only in that
> browser/device, so it's a good idea to occasionally use **"Save to
> file"** inside the app as a backup, and **"Load from file"** to bring
> your tree to another device.

---

## Български

*([↑ English](#english))*

Безплатно, лично приложение за родословно дърво, което работи изцяло в
браузъра ти — без акаунт, без сървър, без реклами. Добавяш хора, свързваш
ги като родители и съпрузи, а дървото само се подрежда по поколения.

**Възможности**
- Автоматично подреждане по поколения — родители, съпрузи, братя/сестри
  и деца се позиционират и свързват автоматично, докато добавяш хора.
- Снимки с центриране на лицето (клик върху снимка в дървото я показва
  голяма), дати на раждане/смърт с автоматично изчислена възраст, и
  незадължително поле "Род" (произход).
- Търсене на хора по име, и намиране на роднинската връзка между двама
  души — връзката се подсветва направо в дървото.
- Отмяна при случайно изтриване, и износ на цялото дърво като PNG
  снимка за споделяне, освен вградения печат.
- Кратка статистика за дървото (хора, поколения, най-възрастен/най-млад)
  на пръв поглед.
- Работи напълно офлайн след инсталиране, и може да се инсталира като
  истинско приложение на телефон или компютър.
- Данните остават само на твоето устройство (запазват се в браузъра) —
  нищо не се качва никъде. "Запази във файл" / "Зареди от файл" служат
  за резервно копие или прехвърляне между устройства — зареждането
  обединява файла с това, което вече е тук, вместо да го презаписва, така
  че поправки на едно устройство и нови хора, добавени на друго, се
  запазват и двете.
- Интерфейс на български и английски, светла и тъмна тема.

### С какво е направено

Чист HTML, CSS и JavaScript — един самостоятелен файл, без framework-и,
без build стъпка, без бекенд, без база данни. Всичко (оформление,
стилове, преводи, алгоритъмът за подреждане на дървото, визуализацията)
живее в този единствен `index.html`.

- **Данни и съхранение** — всички данни се пазят в `localStorage` на
  браузъра, на твоето собствено устройство. Нищо не се изпраща към
  сървър, защото сървър просто няма.
- **Визуализация** — родословното дърво се подрежда от малък собствен
  алгоритъм (родителят винаги е точно един ред над децата си, съпрузите
  остават на един ред и т.н.) и се изчертава като SVG слой за
  съединителните линии.
- **Превод (i18n)** — речник с преводи превключва всеки надпис между
  български и английски мигновено, без презареждане на страницата.
- **Инсталируемо приложение (PWA)** — Web App Manifest + Service
  Worker позволяват на браузъра да го инсталира като истинско
  приложение и да го кешира за офлайн работа, с вграден банер, когато
  има по-нова версия.

### Съвместимост

Самото приложение (добавяне на хора, разглеждане на дървото,
запис/зареждане на файлове) работи във всеки съвременен браузър —
Chrome, Edge, Firefox, Safari — на практически всеки телефон или
компютър от последните няколко години.

Инсталирането му като приложение (а не просто отварянето на страницата)
изисква малко по-нов браузър:

- **Android** — Chrome 90+ (повечето телефони от 2021 г. насам) показва
  опция "Инсталирай приложение".
- **iPhone / iPad** — iOS 11.3+ поддържа "Add to Home Screen" като
  приложение на цял екран; iOS 16+ поддържа и офлайн кеширане чрез
  service worker-а.
- **Компютър** — Chrome или Edge 90+ показват иконка за инсталиране в
  адресната лента. Firefox няма собствен бутон за инсталиране, но
  сайтът работи нормално в браузъра.

Ако браузърът е твърде стар за инсталиране, страницата пак се отваря и
работи нормално като уебсайт — просто без икона на началния екран и без
офлайн режим.

### Поверителност

Няма акаунт, няма анализи (analytics), няма бисквитки, няма
проследяване и няма бекенд, който да събира каквото и да било —
приложението изобщо няма сървър. Всеки добавен човек, снимка и дата
остава само в локалното хранилище на твоя собствен браузър, на твоето
собствено устройство. Нищо не се качва, споделя или вижда от когото и
да било, освен ако сам не изнесеш файл (например за да го изпратиш на
роднина). Поверителността е гарантирана по дизайн, а не само на думи.

### Как да го инсталираш на телефон или компютър

Отваряш **https://petaryankov.github.io/Family-Tree/** и:

**Android (Chrome)**
1. Натискаш менюто (⋮) горе вдясно.
2. Избираш **"Инсталирай приложение"** (или "Add to Home screen").
3. Потвърждаваш — иконата се появява на началния екран като истинско приложение.

**iPhone / iPad (Safari)**
1. Натискаш бутона **Share** (квадратче със стрелка нагоре) в лентата.
2. Скролваш надолу и избираш **"Add to Home Screen"**.
3. Натискаш **Add**.

**Компютър (Chrome или Edge)**
1. Отваряш линка по-горе.
2. Натискаш иконката за инсталиране в адресната лента (монитор със ↓, или ⊕).
3. Натискаш **Install**. Приложението се отваря в собствен прозорец, без адресна лента.

> След инсталиране приложението работи офлайн. Данните живеят само в
> този браузър/устройство, затова е добре периодично да ползваш
> **"Запази във файл"** вътре в приложението като резервно копие, и
> **"Зареди от файл"**, за да пренесеш дървото на друго устройство.
