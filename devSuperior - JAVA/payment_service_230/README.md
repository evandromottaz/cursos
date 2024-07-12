# Funcionalidade: Automatização do Processamento de Contratos

Como um funcionário da empresa responsável pelo processamento de contratos,
eu quero automatizar a geração de parcelas de pagamento de contratos
para que o processo seja mais eficiente e menos propenso a erros.

## Contexto

Dado que eu tenho um contrato com os seguintes detalhes:
| Número do contrato | Data do contrato | Valor total do contrato |
|--------------------|------------------|-------------------------|
| 1234 | 01/07/2024 | 10000.00 |

## Cenário: Geração de parcelas de pagamento para contrato parcelado

Quando eu informo que desejo parcelar o contrato em 5 meses
Então o sistema deve gerar as seguintes parcelas de pagamento:
| Parcela | Data de Vencimento | Valor da Parcela |
|---------|--------------------|------------------|
| 1 | 01/08/2024 | 203,00 |
| 2 | 01/09/2024 | 205,03 |
| 3 | 01/10/2024 | 207,08 |
| 4 | 01/11/2024 | 209,15 |
| 5 | 01/12/2024 | 211,24 |

