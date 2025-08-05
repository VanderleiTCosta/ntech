# ===================================================================
# Dockerfile para o site Notreve Tech (HTML + PHP) - VERSÃO CORRIGIDA
# ===================================================================

# PASSO 1: Usar a imagem oficial do PHP com o servidor Apache.
# Esta é a imagem correta e padrão.
FROM php:8.2-apache

# PASSO 2: Definir o diretório de trabalho dentro do contêiner.
# O Apache nesta imagem já está configurado para usar este diretório.
WORKDIR /var/www/html

# PASSO 3: Copiar TODOS os arquivos do seu projeto para o diretório web do Apache.
# O "." significa "a pasta atual" (seu projeto) e o segundo "." significa
# o diretório de trabalho que definimos acima (/var/www/html).
COPY . .

# PASSO 4 (Opcional, mas boa prática): Garantir que o Apache tenha as permissões corretas.
RUN chown -R www-data:www-data /var/www/html

# A imagem base já sabe como iniciar o Apache. Não precisamos de um comando CMD.
# A porta 80 já é exposta por padrão pela imagem base.