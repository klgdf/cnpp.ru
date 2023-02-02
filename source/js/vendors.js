
@@include('vendors/vanilla/swiper_7.4.1.min.js')

//@include('vendors/vanilla/lazy.js')

  const findElements = e => {
    const t = e,
      {
        node: s,
        select: a
      } = t;
    return t.toggle = s.children[0],
      t.holder = s.children[1],
      t.isActive = !1,
      t.options = a.options,
      t.active = a.selectedIndex >= 0 ? a.selectedIndex : 0,
      t
  },
  isOption = (e, {
    className: t
  }) => e.classList.contains(t + "__option"),
  shouldDropdown = (e, {
    className: t
  }) => e.classList.contains(t + "__option"),
  createBaseHTML = (e, t) => `\n\t<div class="${t}">\n\t\t<button class="${t}__toggle" type="button">${e}</button>\n\t\t<div class="${t}__options"></div>\n\t</div>\n`,
  insertBase = (e, t) => {
    const s = e.selectedIndex >= 0 ? e.selectedIndex : 0;
    const a = e.options[s].textContent,
      i = createBaseHTML(a, t); e.insertAdjacentHTML("afterend", i)
  },
  renderOption = (e, t, s, a, i) => `\n    ${e}\n\t\t\t\t<button class="${i}__option ${s === a ? i + "__option--active" : ""}" type="button" data-index="${s}">${t.textContent}</button>\n  `,
  renderOptions = (e, t, s) => [...e].reduce((e, a, i) => renderOption(e, a, i, t, s), ""),
  pickOption = e => {
    const t = e,
      {
        select: s,
        active: a,
        customOptions: i,
        className: n
      } = t; s.selectedIndex = a,
        t.optionActive.classList.remove(n + "__option--active"),
        t.optionActive = i[a],
        t.optionActive.classList.add(n + "__option--active"),
        t.toggle.textContent = t.optionActive.textContent
  },
  onOptionsClick = (e, t) => {
    e.preventDefault();
    const s = t,
      {
        select: a,
        hideDropdown: i
      } = s,
      {
        target: n
      } = e; isOption(n, s) && (s.active = n.dataset.index, pickOption(s)),
        shouldDropdown(n, s) && i(),
        "0" !== n.dataset.index ? n.closest(".select").classList.add("select_fillet") : n.closest(".select").classList.remove("select_fillet")
  },
  initOptionsEvents = e => {
    e.holder.addEventListener("click", t => onOptionsClick(t, e))
  },
  render = e => {
    const t = e,
      {
        holder: s,
        options: a,
        className: i,
        active: n
      } = t,
      r = renderOptions(a, n, i); s.insertAdjacentHTML("afterbegin", r),
        t.customOptions = [...s.children],
        t.optionActive = t.customOptions[n],
        initOptionsEvents(t)
  },
  hideSelect = ({
    node: e,
    select: t
  }) => e.appendChild(t),
  wrapSelect = e => {
    const t = e,
      {
        select: s,
        className: a
      } = t;
    return new Promise(e => {
      requestAnimationFrame(() => {
        insertBase(s, a),
          t.node = s.nextElementSibling,
          hideSelect(t),
          e(t)
      })
    })
  },
  unsubscribeDocument = ({
    hideDropdown: e
  }) => document.removeEventListener("click", e),
  subscribeDocument = ({
    hideDropdown: e
  }) => document.addEventListener("click", e),
  hideOptions = e => {
    const t = e,
      {
        node: s,
        className: a
      } = t; t.isActive = !1,
        s.classList.remove(a + "--active"),
        unsubscribeDocument(t)
  },
  showOptions = e => {
    const t = e,
      {
        node: s,
        className: a
      } = t; t.isActive = !0,
        s.classList.add(a + "--active"),
        subscribeDocument(t)
  },
  toggleOptions = e => {
    e.isActive ? hideOptions(e) : showOptions(e)
  },
  onNodeClick = e => e.stopPropagation(),
  initEvents = e => {
    const t = e,
      {
        node: s,
        toggle: a
      } = t,
      i = () => {
        toggleOptions(t)
      };
    return t.showDropdown = () => {
      showOptions(t)
    },
      t.hideDropdown = () => {
        hideOptions(t)
      },
      t.toggleDropdown = i,
      a.addEventListener("click", i),
      s.addEventListener("click", onNodeClick),
      t
  },
  constructor = e => {
    const t = {
      select: e,
      className: e.dataset.customSelectClass
    }; wrapSelect(t).then(findElements).then(initEvents).then(render)
  };
const selects = document.querySelectorAll('[data-custom-select-class]');
selects.forEach(constructor);