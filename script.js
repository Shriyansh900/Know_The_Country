       let form = document.querySelector("form");
       let input = document.querySelector('input');
       let countryName = document.querySelector('#countryName');
       let region = document.querySelector('#region');
       let area = document.querySelector('#area');
       let population = document.querySelector('#population');
       let currency = document.querySelector('#currency');
       let currencyName = document.querySelector('#currencyName');
       let currencySymbol = document.querySelector('#currencySymbol');
       let countryFlag = document.querySelector('#countryFlag');
       let countryContainer = document.querySelector('#countryInfo');

        //   console.log(countryName, region, area, population, currency, currencyName, currencySymbol, countryFlag);
          
       
       
       
       
       
       
        // Dark mode toggle
        // const darkModeToggle = document.getElementById('darkModeToggle');
        // const body = document.body;

        // darkModeToggle.addEventListener('click', () => {
        //     body.classList.toggle('dark-mode');
        //     if (body.classList.contains('dark-mode')) {
        //         darkModeToggle.textContent = 'light Mode';
        //     } else {
        //         darkModeToggle.textContent = 'Dark Mode';
        //     }
        // });

        const fetchCountry = async (e) => {
            e.preventDefault();
            
            const response = await fetch(`https://restcountries.com/v3.1/name/${input.value}`);
            
            const data = await response.json();
            console.dir(data);

            countryName.innerText = data[0].name.common;
            region.innerText = data[0].region;
            area.innerText = data[0].area;
            population.innerText = data[0].population;
            currency.innerText = data[0].currencies[Object.keys(data[0].currencies)[0]].name;
            currencyName.innerText = data[0].currencies[Object.keys(data[0].currencies)[0]].name;
            currencySymbol.innerText = data[0].currencies[Object.keys(data[0].currencies)[0]].symbol;
            countryFlag.src = data[0].flags.png;
            countryContainer.className = "container mt-5";  
        }
        
        form.addEventListener('submit', fetchCountry);