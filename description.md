#happy casio

Manutenção de máquinas do casino

- Registo de avairas
- Notificação de avarias
- Ordens de trabalho

##Avarias
- Indice com todas avarias (mais recentes primeiro)
- CRUD Avarias

##Ordens de trabalho
- Avaria
- Associada a um técnico

##Mapa Sala
- static Image

##Users
- CRUD Users

#Objectos

##Maquina
- Numero(ID)
- Localização
- Nome(Jogo)
- Marca

##Avaria
- Maquina questão (ID) (required)
- Descrição text (required)
- Estado (ON/OFF) (required)

##Machine States
- On
- Off
- On - waiting repairing
- Off - waiting reparing

##User Roles
- Admin
- Tecnico (Pode reportar e ver avarias, só pode ver ordem de trabalho dele)
