// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, numberOfPets, bedrooms, fullBathrooms, halfBathrooms, rooms } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: 'New Form Submission',
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Number of Pets: ${numberOfPets}
        Bedrooms: ${bedrooms}
        Full Bathrooms: ${fullBathrooms}
        Half Bathrooms: ${halfBathrooms}
        Dining Room: ${rooms.dining}
        Kitchen: ${rooms.kitchen}
        Living Room: ${rooms.livingRoom}
        Family Room: ${rooms.familyRoom}
        Laundry: ${rooms.laundry}
        Utility Room: ${rooms.utilityRoom}
        Den: ${rooms.den}
        Loft: ${rooms.loft}
        Basement: ${rooms.basement}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
