let template = `
<aside id="${modal.id}"
    class="mdc-dialog"
    role="alertdialog"
    aria-labelledby="my-mdc-dialog-label"
    aria-describedby="my-mdc-dialog-description">
    <div class="mdc-dialog__surface">
        <header class="mdc-dialog__header">
        <h2 id="my-mdc-dialog-label" class="mdc-dialog__header__title">
            ${modal.title}
        </h2>
        </header>
        <section id="my-mdc-dialog-description" class="mdc-dialog__body">
        ${modal.message}
        </section>
        <footer class="mdc-dialog__footer">
            <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Decline</button>
            <button type="button" class="mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept">Accept</button>
        </footer>
    </div>
    <div class="mdc-dialog__backdrop"></div>
</aside>
`