function initUtilityModule(userLicense, shopDomain) {
  var container = document.getElementById('utility-module-container');
  container.innerHTML = `
    <div id="utility-dialog" style="display:none;">
      <div class="dialog-overlay"></div>
      <div class="dialog-content">
        <h1>STATUS DO TEMA:</h1>
        <h2 id="status-message"></h2>
        <p id="details-message"></p>
        <p id="theme-update-text"></p>
        <button id="acquire-license-btn" disabled>ADQUIRIR LICENÇA</button>
        <div id="terms-checkbox">
          <input type="checkbox" id="terms-agreement">
          <label for="terms-agreement">Concordo com os <a href="https://termosdeusoeisencao.carrd.co/" target="_blank">termos e condições</a>.</label>
        </div>
      </div>
    </div>
  `;

  function toggleAcquireButton() {
    var checkbox = document.getElementById('terms-agreement');
    var button = document.getElementById('acquire-license-btn');
    button.disabled = !checkbox.checked;
  }

  function acquireLicense() {
    window.open('https://protemasbrasil.carrd.co/', '_blank');
  }

  function showDialog() {
    document.getElementById('utility-dialog').style.display = 'block';
  }

  function updateThemeUpdateText() {
    const now = new Date();
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const currentMonth = months[now.getMonth()];
    const currentYear = now.getFullYear();
    
    document.getElementById('theme-update-text').textContent = `Última atualização em ${currentMonth} de ${currentYear}`;
  }

  function checkAndUpdateLicense(license, domain, callback) {
    // Simulating API call to check license
    setTimeout(() => {
      if (license && domain) {
        if (license === "DEMO_LICENSE") {
          callback(false, "Licença em uso em outro domínio");
        } else if (license === "VALID_LICENSE") {
          callback(true, "Licença ativada com sucesso");
        } else {
          callback(false, "Licença inválida ou não encontrada");
        }
      } else {
        callback(false, "Licença inválida ou não encontrada");
      }
    }, 1000);
  }

  checkAndUpdateLicense(userLicense, shopDomain, function(isValid, message) {
    var statusMessage = document.getElementById('status-message');
    var detailsMessage = document.getElementById('details-message');

    if (isValid) {
      statusMessage.textContent = "STATUS DO TEMA:";
      statusMessage.style.color = "green";
      detailsMessage.textContent = message;
    } else {
      statusMessage.textContent = "Adicione uma Licença Válida para Ativar os Recursos Premium.";
      statusMessage.style.color = "red";
      detailsMessage.textContent = message;
      detailsMessage.classList.add('license-unavailable');
      showDialog();
    }
    updateThemeUpdateText();
  });

  // Adicione os event listeners após a criação dos elementos
  document.getElementById('terms-agreement').addEventListener('change', toggleAcquireButton);
  document.getElementById('acquire-license-btn').addEventListener('click', acquireLicense);

  // Inicialize o estado do botão
  toggleAcquireButton();
}
