FROM node:17-alpine AS runner
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 make g++ && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# Set working directory
WORKDIR /app
RUN chown node:node . -R

# ENV NODE_ENV=production - this will not add any dev dependencies careful 
COPY --chown=node:node package.json yarn.lock ./
RUN yarn global add gatsby-cli
USER node
RUN yarn install

# RUN yarn --frozen-lockfile --non-interactive
# Copy all files from current directory to working dir in image
COPY --chown=node:node src ./

ENTRYPOINT ["gatsby", "develop", "-H", "0.0.0.0"]