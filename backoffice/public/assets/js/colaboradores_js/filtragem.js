const filtragem = (searchInput, tableRows) => {

    searchInput.addEventListener('keyup', function () {
        const searchValue = searchInput.value.toLowerCase();

        tableRows.forEach(function (row) {
            const nome = row.querySelector('td:nth-child(2)').textContent.toLowerCase();

            if (nome.includes(searchValue)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

export { filtragem };