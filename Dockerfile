# Sử dụng node image làm base image
FROM node:alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép file package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép tất cả các file từ thư mục dự án vào thư mục làm việc trong container
COPY . .

# Biên dịch ứng dụng React
RUN npm run build

# Mở cổng 3000 (hoặc cổng mà ứng dụng React của bạn sử dụng)
EXPOSE 3000

# Khởi chạy ứng dụng React
CMD ["npm", "start"]