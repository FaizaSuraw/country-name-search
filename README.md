![image](https://github.com/user-attachments/assets/6c43ce5c-c799-4855-a0f3-f1efd46b5eae)
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
```

## 🚀 Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/FaizaSuraw/country-name-search.git
   cd country-name-search
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
## Screenshot
![image](https://github.com/user-attachments/assets/18253277-9ac7-4de3-a8fa-9ba56ec41e81)
![image](https://github.com/user-attachments/assets/c917ae33-71b6-4e98-840f-9042a998271d)




## 🧠 Improvements To Explore

* Add gender prediction using [Genderize.io](https://genderize.io)
* Add nationality flag icons
* Store and show full list of probabilities
* Dark mode toggle



## 👩‍💻 Author

**Faiza Ibrahim Suraw**


