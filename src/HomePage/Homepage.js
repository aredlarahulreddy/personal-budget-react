import React from 'react';

function Homepage() {
  return (
    <main className="center" id="main">


<section className="page-area">

        <article>
 
            <h3>Stay on track</h3>
            <p>
                Do you know where you are spending your money? If you really stop to track it down,
                you would get surprised! Proper budget management depends on real data... and this
                app will help you with that!
            </p>
        </article>

        <article>
            <h3>Alerts</h3>
            <p>
                What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
            </p>
        </article>

        <article>
            <h3>Results</h3>
            <p>
                People who stick to a financial plan, budgeting every expense, get out of debt faster!
                Also, they to live happier lives... since they expend without guilt or fear... 
                because they know it is all good and accounted for.
            </p>
        </article>

        <article>
            <h2>Chart</h2>
            <p> The pie chart represents the distribution of your budget across different categories.
              <canvas id="myChart" width="400" height="400" role="img" aria-label="Budget distribution pie chart showing various categories"></canvas>
               <div class="chart-description" aria-hidden="true">
                The pie chart represents the distribution of your budget across different categories.
              </div>
              <svg width="400" height="400" id="d3Chart"></svg> 
            </p>
          </article>
          

    </section>

</main>

  );
}

export default Homepage;
