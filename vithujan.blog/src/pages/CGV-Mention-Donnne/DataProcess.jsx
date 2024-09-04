import PopularArticles from "../../Component/PopularArticles";
import "./CMD.css";

function DataProcessRecord() {
  return (
    <section className="bi-cmd DPR">
      <p className="bi-cmd-paragraph"> Data Processing Record </p>
      <p className="bi-cmd-paragraph">
        This document serves as the Data Processing Record for [Your Name or
        Your Company Name] (hereinafter referred to as "the Data Controller") in
        accordance with the provisions of the General Data Protection Regulation
        (GDPR).
      </p>
      <p className="bi-cmd-paragraph">1. Data Controller</p>
      <ul className="bi-cmd-list">
        <li className="bi-cmd-list-item">
          Entity Name: [Your Name or Your Company Name]
        </li>
        <li className="bi-cmd-list-item">Address: [Company Address]</li>
        <li className="bi-cmd-list-item">
          Phone Number: [Company Phone Number]
        </li>
        <li className="bi-cmd-list-item">
          Contact Email Address: [Contact Email Address]
        </li>
      </ul>
      <p className="bi-cmd-paragraph">2. Data Protection Officer (DPO)</p>
      <ul className="bi-cmd-list">
        <li className="bi-cmd-list-item">
          DPO Name (if applicable): [DPO Name]
        </li>
        <li className="bi-cmd-list-item">
          DPO Email Address (if applicable): [DPO Email Address]
        </li>
      </ul>
      <p className="bi-cmd-paragraph">3. Data Processing Activities</p>
      <p className="bi-cmd-paragraph">Activity 1: Customer Management </p>
      <ul className="bi-cmd-list">
        <li className="bi-cmd-list-item">
          Description: Collection and management of customer's personal data for
          service provision, billing, and support.
        </li>
        <li className="bi-cmd-list-item">
          Categories of Personal Data: Name, address, phone number, email
          address, purchase history.
        </li>
        <li className="bi-cmd-list-item">
          Legal Basis for Processing: Contract performance.
        </li>
        <li className="bi-cmd-list-item">
          Data Retention Period: [Data Retention Period]
        </li>
      </ul>
      <p className="bi-cmd-paragraph">Activity 2: Newsletter and Marketing </p>
      <ul className="bi-cmd-list">
        <li className="bi-cmd-list-item">
          Description: Sending newsletters, promotional offers, and marketing
          communications.
        </li>
        <li className="bi-cmd-list-item">
          Categories of Personal Data: Email address, name (if provided by the
          user).
        </li>
        <li className="bi-cmd-list-item">
          Legal Basis for Processing: User consent.
        </li>
        <li className="bi-cmd-list-item">
          Data Retention Period: [Data Retention Period]
        </li>
      </ul>
      <p className="bi-cmd-paragraph">Activity 3: Website Analytics </p>
      <ul className="bi-cmd-list">
        <li className="bi-cmd-list-item">
          Description: Collection of analytics data to improve the website and
          understand user behavior.
        </li>
        <li className="bi-cmd-list-item">
          Categories of Personal Data: Usage data, IP address.
        </li>
        <li className="bi-cmd-list-item">
          Legal Basis for Processing: Legitimate interest.
        </li>
        <li className="bi-cmd-list-item">
          Data Retention Period: [Data Retention Period]
        </li>
      </ul>
      <p className="bi-cmd-paragraph">4. Recipients of Personal Data</p>
      <ul className="bi-cmd-list">
        <li className="bi-cmd-list-item">
          Personal data may be shared with the following third parties:
        </li>
        <li className="bi-cmd-list-item">
          [Name of third parties and justification for disclosure]
        </li>
      </ul>
      <p className="bi-cmd-paragraph">
        5. Transfer of Personal Data
        <br />
        The Data Controller may transfer personal data to third countries or
        international organizations, if applicable. Such transfers are carried
        out in accordance with legal and regulatory requirements.
      </p>
      <p className="bi-cmd-paragraph">
        6. Security Measures
        <br />
        Appropriate technical and organizational security measures are in place
        to protect personal data against unauthorized access, disclosure,
        alteration, or destruction.
      </p>
      <p className="bi-cmd-paragraph">
        7. Data Subject Rights
        <br />
        Data subjects have the right to access, rectify, erase, or restrict the
        processing of their personal data. They also have the right to object to
        processing and withdraw their consent where processing is based on
        consent. To exercise these rights, please contact [Contact Email
        Address].
      </p>
      <p className="bi-cmd-paragraph">
        8. Data Breach Notification
        <br />
        In the event of a personal data breach, notification will be made in
        accordance with applicable legal requirements.
      </p>
      <p className="bi-cmd-paragraph">
        9. Review and Update of the Record
        <br />
        This record will be reviewed and updated regularly to reflect the
        current data processing activities.
      </p>{" "}
      <PopularArticles />
    </section>
  );
}

export default DataProcessRecord;
