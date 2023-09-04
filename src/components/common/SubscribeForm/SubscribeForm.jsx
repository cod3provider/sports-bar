import {FooterFormTitle, StyledSubscribeForm, SubscribeButton, SubscribeInput} from "./SubscribeForm.styled.js";

const SubscribeForm = () => {
	return (
		<div>
			<StyledSubscribeForm>
				<div>
					<FooterFormTitle>
						Subscribe to our newsletter.
					</FooterFormTitle>

					<SubscribeInput placeholder="Enter your mail" type="text"/>
				</div>

				<SubscribeButton>
					Subscribe
				</SubscribeButton>
			</StyledSubscribeForm>
		</div>
	)
}

export default SubscribeForm;
