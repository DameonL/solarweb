import { h } from "preact";
import { PopupWindowContent } from "../PopupWindow";

const ContactForm: PopupWindowContent = {
  title: "Contact",
  render: (
    <div>
      <div>Need to reach out for support or a quote?</div>
      <form>
        <div>
          <label>Your Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <label>Your Email</label>
          <input type="text" placeholder="Your Email Address" />
        </div>
        <div>
          <label>Subject</label>
          <select>
            <option>Game Support</option>
            <option>Tool Support</option>
          </select>
        </div>
        <div>
          <textarea placeholder="Your message" />
        </div>

      </form>
    </div>
  ),
};

export default ContactForm;
