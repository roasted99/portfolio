import { FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
		<div className="contact">
			<div className="contactinfo">
				<div className="neonsign">
					<span>Get&nbsp;</span>
					<span className="flicker">i</span>
					<span>n&nbsp;</span>
					<span className="flicker">t</span>
					<span>ouch</span>
					<span className="fastFlicker">!</span>
				</div>
				<div>
					<a
						href="https://www.linkedin.com/in/kham-laung/"
						className="link"
						target="_blank"
					>
						<span className="icon">
							<FaLinkedin /> LinkedIn
						</span>
					</a>
				</div>
				<div>
					<a
						href="https://github.com/roasted99"
						className="link"
						target="_blank"
					>
						<span className="icon">
							<FaGithub /> GitHub
						</span>
					</a>
				</div>
				<div>
					<a
						href="https://twitter.com/KhamLao11"
						className="link"
						target="_blank"
					>
						<span className="icon">
							<FaTwitter /> Twitter
						</span>
					</a>
				</div>
			</div>
			<ContactForm />
		</div>
	);
};

export default Contact;