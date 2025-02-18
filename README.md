# Micro Frontend Example

Bu proje, micro frontend mimarisini kullanarak oluşturulmuş bir örnek uygulamadır. Proje, React ve Tailwind CSS kullanılarak geliştirilmiştir. Projede üç ayrı uygulama bulunmaktadır: Host-App, App1 ve App2.

## Kurulum

Projeyi yerel ortamınıza klonladıktan sonra, gerekli bağımlılıkları yüklemek için aşağıdaki adımları izleyin:

```bash
git clone https://github.com/kullanici-adi/micro-front-example-2.git
cd micro-front-example-2
```

### Host-App

```bash
cd Host-App
npm install
```

### Auth

```bash
cd ../Auth
npm install
```

### PDP

```bash
cd ../PDP
npm install
```

## Çalıştırma

Her bir uygulamayı yerel ortamınızda çalıştırmak için aşağıdaki komutları kullanın:

### Host-App

```bash
cd Host-App
npm start
```

### Auth

```bash
cd ../Auth
npm start
```

### PDP

```bash
cd ../PDP
npm start
```

Bu komutlar, uygulamaları geliştirme modunda başlatacaktır. Tarayıcınızda aşağıdaki adresleri açarak uygulamaları görüntüleyebilirsiniz:

- Host-App: [http://localhost:3000](http://localhost:3000)
- Auth: [http://localhost:3001](http://localhost:3001)
- PDP: [http://localhost:3002](http://localhost:3002)

## Proje Yapısı

Proje aşağıdaki gibi bir dosya yapısına sahiptir:

```
micro-front-example-2/
├── Host-App/
│   ├── src/
│   ├── public/
│   └── package.json
├── Auth/
│   ├── src/
│   ├── public/
│   └── package.json
├── PDP/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## Kullanılan Teknolojiler

- React: Kullanıcı arayüzünü oluşturmak için kullanılan JavaScript kütüphanesi.
- Tailwind CSS: Hızlı ve kolay bir şekilde stil vermek için kullanılan CSS framework'ü.
- Webpack: Modülleri birleştirmek ve paketlemek için kullanılan araç.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir pull request oluşturun. Her türlü katkı ve geri bildirim memnuniyetle karşılanır.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.