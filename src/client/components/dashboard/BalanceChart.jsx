import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, Title);

/*const BalanceChart = ({ projects }) => {
    const colors = ["#B9FF66", "#81b5f3", "#7b5af0", "#71db14", "#0c3f7e", "#2f0fa3"];

    const projectSpendings = projects.map((project, index) => {
        const totalSpent = project.expenses.reduce((acc, expense) => acc + expense.amount, 0);
        return {
            label: project.name,
            amount: totalSpent,
            color: colors[index % colors.length],
        };
    });

    const validProjectSpendings = projectSpendings.filter(proj => proj.amount > 0);

    if (validProjectSpendings.length === 0) {
        return <p className="text-center text-gray-500">No hay datos de gastos para mostrar.</p>;
    }

    const data = {
        labels: validProjectSpendings.map(proj => proj.label),
        datasets: [
            {
                data: validProjectSpendings.map(proj => proj.amount),
                backgroundColor: validProjectSpendings.map(proj => proj.color),
                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        plugins: {
            legend: { display: true, position: "bottom" },
            title: { display: true},
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="chart-container" style={{ height: "300px" }}>
            <Pie data={data} options={options} />
        </div>
    );
};*/

const BalanceChart = ({ projects }) => {
    const colors = ["#B9FF66", "#81b5f3", "#7b5af0", "#71db14", "#0c3f7e", "#2f0fa3"];

    const projectSpendings = projects.map((project, index) => {
        const totalSpent = project.expenses
            .filter(expense => expense && typeof expense.amount === 'number')
            .reduce((acc, expense) => acc + expense.amount, 0);

        return {
            label: project.name,
            amount: totalSpent,
            color: colors[index % colors.length],
        };
    });

    const validProjectSpendings = projectSpendings.filter(proj => proj.amount > 0);

    if (validProjectSpendings.length === 0) {
        return <p className="text-center text-gray-500">No hay datos de gastos para mostrar.</p>;
    }

    const data = {
        labels: validProjectSpendings.map(proj => proj.label),
        datasets: [
            {
                data: validProjectSpendings.map(proj => proj.amount),
                backgroundColor: validProjectSpendings.map(proj => proj.color),
                borderColor: "#ffffff",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        plugins: {
            legend: { display: true, position: "bottom" },
            title: { display: true },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="chart-container" style={{ height: "300px" }}>
            <Pie data={data} options={options} />
        </div>
    );
};

export default BalanceChart;
