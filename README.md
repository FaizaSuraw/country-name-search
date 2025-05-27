
# 🌍 Name Origin Finder

A simple and elegant web application that allows users to search the **most likely country of origin** based on a name using the [Nationalize.io API](https://nationalize.io/). Built with vanilla JavaScript, HTML, and CSS — no frameworks, just pure front-end.

## 🔎 Features

* Search for a name and get its most probable country of origin
* Probability displayed as a percentage
* Clean and responsive UI with styled form and results
* Error handling for empty inputs and failed API requests
* Easily extendable with other APIs like `Genderize.io`

## 🛠️ Technologies Used

* HTML5
* CSS3 (with gradients and form styling)
* JavaScript (ES6+)
* [Nationalize.io API](https://api.nationalize.io/)

## 📁 File Structure

```
📦 name-origin-finder
├── index.html          # Main HTML file
├── style.css           # Styling
├── script.js           # JavaScript logic
├── countries.json      # ISO country code-to-name mapping (optional enhancement)
└── favicon.ico         # (Optional) Tab icon
```

## 🚀 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/name-origin-finder.git
   cd name-origin-finder
   ```

2. **Open `index.html` in your browser**

No build steps or dependencies — it just works.

## 📡 How It Works

* You enter a name.
* The app sends a request to:
  `https://api.nationalize.io/?name=yourname`
* The API responds with a list of probable countries and confidence levels.
* The top result is displayed with country name and probability.

## 🌐 API Example Response

```json
{
  "name": "faiza",
  "country": [
    {
      "country_id": "PK",
      "probability": 0.89
    },
    {
      "country_id": "IN",
      "probability": 0.06
    }
  ]
}
```

## 🧠 Improvements To Explore

* Add gender prediction using [Genderize.io](https://genderize.io)
* Add nationality flag icons
* Store and show full list of probabilities
* Dark mode toggle



## 👩‍💻 Author

**Faiza Ibrahim Suraw**


