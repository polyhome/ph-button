import {
	css,
	html,
	LitElement
} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

class Button extends LitElement {
	firstUpdated() {
		this.actions = {
			click: {
				command: this.card.commands.find(c => c.trigger === 'click')._id,
				card: this.card._id
			}
		};
	}

	static get styles() {
		return css`
			.container {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			button {
				background-color: #333;
				border: none;
				color: white;
				padding: 10px 10px;
				text-align: center;
				text-decoration: none;
				display: inline-block;
				font-size: 16px;
				height: 100%;
				width: 100%;
			}
		`;
	}

	render() {
		return html`
			<div class="container">
				<button @click=${() => this.exec(this.actions.click)}>
					${this.card.state.text}
				</button>
			</div>
		`;
	}
}

customElements.define('ph-button', Button);
