// // server/seedProjects.js
// import mongoose from 'mongoose';
// import { v2 as cloudinary } from 'cloudinary';
// import dotenv from 'dotenv';
// import Project from './models/Project.js';

// dotenv.config();

// // 1. Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // 2. Static UI Assets (No DB save, just upload for the UI)
// const brandAssets = [
//   {
//     name: "EditVerse Logo",
//     localPath: "./public/editverse-logo.webp",
//     folder: "editverse_assets"
//   },
//   {
//     name: "Founder Portrait",
//     localPath: "./public/founder-portrait.webp",
//     folder: "editverse_assets"
//   }
// ];

// // 3. Portfolio Items (Upload to Cloudinary AND save to MongoDB)
// const portfolioItems = [
//   // --- REELS / VIDEOS ---
//   {
//     title: "Client Testimonial & Reel 1",
//     category: "Reels",
//     description: "High-retention short form video with professional pacing and editing.",
//     localPath: "./public/video1.mp4",
//     mediaType: "video",
//     folder: "editverse_portfolio/reels",
//     order: 1
//   },
//   {
//     title: "Client Reel 2",
//     category: "Reels",
//     description: "Engaging social media reel designed to maximize viewer watch time.",
//     localPath: "./public/video2.mp4",
//     mediaType: "video",
//     folder: "editverse_portfolio/reels",
//     order: 2
//   },

//   // --- THUMBNAILS ---
//   {
//     title: "Wedding Carnival Party",
//     category: "Thumbnails",
//     description: "Vibrant and celebratory vlog thumbnail designed for high click-through rates.",
//     localPath: "./public/images/i1.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/thumbnails",
//     order: 3
//   },
//   {
//     title: "Sold It - Why I Left YouTube",
//     category: "Thumbnails",
//     description: "Emotional and highly engaging storytelling thumbnail layout.",
//     localPath: "./public/images/i2.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/thumbnails",
//     order: 4
//   },
//   {
//     title: "Didi Ki Shadi",
//     category: "Thumbnails",
//     description: "Cinematic and traditional wedding series thumbnail.",
//     localPath: "./public/images/i3.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/thumbnails",
//     order: 5
//   },
//   {
//     title: "24 Hours In Village",
//     category: "Thumbnails",
//     description: "High-retention rural lifestyle vlog thumbnail with clear text hierarchy.",
//     localPath: "./public/images/i4.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/thumbnails",
//     order: 6
//   },
//   {
//     title: "iPhone AT ₹7999",
//     category: "Thumbnails",
//     description: "Click-optimized tech deal thumbnail with eye-catching pricing graphics.",
//     localPath: "./public/images/i5.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/thumbnails",
//     order: 7
//   },
//   {
//     title: "Explore Patna - Day 1",
//     category: "Thumbnails",
//     description: "Travel vlog thumbnail featuring engaging overlay text and high contrast.",
//     localPath: "./public/images/i6.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/thumbnails",
//     order: 8
//   },
//   {
//     title: "Patna Ka Trampoline Park",
//     category: "Thumbnails",
//     description: "Fun, energetic, and colorful lifestyle vlog thumbnail.",
//     localPath: "./public/images/i7.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/thumbnails",
//     order: 9
//   },

//   // --- GRAPHIC DESIGN ---
//   {
//     title: "2K Followers Celebration",
//     category: "Graphic Design",
//     description: "Milestone celebration graphic for social media profiles.",
//     localPath: "./public/images/graphics/g1.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 10
//   },
//   {
//     title: "Vada Pav Promo Flyer",
//     category: "Graphic Design",
//     description: "Eye-catching food promotion graphic for local business.",
//     localPath: "./public/images/graphics/g2.jpg", // Noticed this is a .jpg
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 11
//   },
//   {
//     title: "Cake Villa Menu Promo",
//     category: "Graphic Design",
//     description: "Clean and attractive dessert promotional graphic.",
//     localPath: "./public/images/graphics/g3.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 12
//   },
//   {
//     title: "Cake Villa Order Creative",
//     category: "Graphic Design",
//     description: "High-conversion social media post for bakery orders.",
//     localPath: "./public/images/graphics/g4.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 13
//   },
//   {
//     title: "Mother's Day Special Post",
//     category: "Graphic Design",
//     description: "Themed holiday promotional post for business branding.",
//     localPath: "./public/images/graphics/g5.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 14
//   },
//   {
//     title: "Arogyam Hospital Banner",
//     category: "Graphic Design",
//     description: "Professional medical facility advertisement and info poster.",
//     localPath: "./public/images/graphics/g6.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 15
//   },
//   {
//     title: "Patna Arts Ad Creative",
//     category: "Graphic Design",
//     description: "Business services promotional graphic with bold typography.",
//     localPath: "./public/images/graphics/g7.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 16
//   },
//   {
//     title: "Ather Scooter Offer",
//     category: "Graphic Design",
//     description: "Automotive sales and promotional offer creative.",
//     localPath: "./public/images/graphics/g8.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 17
//   },
//   {
//     title: "Raj Multimedia Portfolio",
//     category: "Graphic Design",
//     description: "Studio service list and booking advertisement graphic.",
//     localPath: "./public/images/graphics/g9.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 18
//   },
//   {
//     title: "Chaat Offer Poster",
//     category: "Graphic Design",
//     description: "Food styling promotional poster for street food cafe.",
//     localPath: "./public/images/graphics/g10.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 19
//   },
//   {
//     title: "Event & Wedding Planner Ad",
//     category: "Graphic Design",
//     description: "Elegant service offering poster for event planning.",
//     localPath: "./public/images/graphics/g11.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 20
//   },
//   {
//     title: "Women's Day Special Offer",
//     category: "Graphic Design",
//     description: "Holiday specific marketing campaign creative.",
//     localPath: "./public/images/graphics/g12.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 21
//   },
//   {
//     title: "Happy Holi Wishes",
//     category: "Graphic Design",
//     description: "Colorful festival greeting graphic for brand engagement.",
//     localPath: "./public/images/graphics/g13.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 22
//   },
//   {
//     title: "10K Followers Milestone",
//     category: "Graphic Design",
//     description: "Community appreciation graphic for hitting 10,000 followers.",
//     localPath: "./public/images/graphics/g14.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 23
//   },
//   {
//     title: "iPhone Giveaway / Offer",
//     category: "Graphic Design",
//     description: "High-contrast promotional graphic for mobile store.",
//     localPath: "./public/images/graphics/g15.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 24
//   },
//   {
//     title: "Comedy Journey 10K Milestone",
//     category: "Graphic Design",
//     description: "Personal brand milestone celebration graphic.",
//     localPath: "./public/images/graphics/g16.webp",
//     mediaType: "image",
//     folder: "editverse_portfolio/graphics",
//     order: 25
//   }
// ];

// const runMigration = async () => {
//   try {
//     console.log('🔄 Connecting to MongoDB...');
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('✅ MongoDB Connected.');

//     // --- PHASE 1: BRAND ASSETS ---
//     console.log('\n--- PHASE 1: UPLOADING BRAND ASSETS ---');
//     const assetUrls = {};
//     for (const asset of brandAssets) {
//       console.log(`⏳ Uploading ${asset.name}...`);
//       const uploadResult = await cloudinary.uploader.upload(asset.localPath, {
//         folder: asset.folder,
//         resource_type: "auto"
//       });
//       assetUrls[asset.name] = uploadResult.secure_url;
//       console.log(`✅ ${asset.name} uploaded!`);
//     }

//     // --- PHASE 2: PORTFOLIO ITEMS ---
//     console.log('\n--- PHASE 2: SEEDING PORTFOLIO DATABASE ---');
//     await Project.deleteMany(); 
//     console.log('🧹 Cleared existing projects in the database');

//     for (const item of portfolioItems) {
//       console.log(`⏳ Uploading ${item.localPath}...`);
      
//       const uploadResult = await cloudinary.uploader.upload(item.localPath, {
//         folder: item.folder, // Uses the specific sub-folder for better organization
//         resource_type: "auto" 
//       });

//       const newProject = new Project({
//         title: item.title,
//         category: item.category,
//         description: item.description,
//         mediaUrl: uploadResult.secure_url,
//         mediaType: item.mediaType,
//         order: item.order
//       });

//       await newProject.save();
//       console.log(`💾 Saved "${item.title}" to MongoDB.`);
//     }

//     // --- SUMMARY ---
//     console.log('\n🎉 MIGRATION COMPLETE! 🎉');
//     console.log('All files have been uploaded to Cloudinary and the database is seeded.');
    
//     console.log('\n==================================================');
//     console.log('👇 IMPORTANT: UPDATE YOUR REACT CODE WITH THESE URLS 👇');
//     console.log('==================================================');
//     console.log(`Logo URL (For Footer.jsx / Navbar.jsx): \n-> ${assetUrls["EditVerse Logo"]}\n`);
//     console.log(`Founder Portrait URL (For Founder.jsx): \n-> ${assetUrls["Founder Portrait"]}`);
//     console.log('==================================================\n');

//     process.exit(0);

//   } catch (error) {
//     console.error('❌ Migration Failed:', error);
//     process.exit(1);
//   }
// };

// runMigration();




// server/seedProjects.js
import mongoose from 'mongoose';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const portfolioItems = [
  {
    title: "Cake Villa Menu Promo",
    category: "Graphic Design",
    description: "Clean and attractive dessert promotional graphic.",
    localPath: "./public/images/graphics/g3.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 12
  },
  {
    title: "Cake Villa Order Creative",
    category: "Graphic Design",
    description: "High-conversion social media post for bakery orders.",
    localPath: "./public/images/graphics/g4.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 13
  },
  {
    title: "Mother's Day Special Post",
    category: "Graphic Design",
    description: "Themed holiday promotional post for business branding.",
    localPath: "./public/images/graphics/g5.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 14
  },
  {
    title: "Arogyam Hospital Banner",
    category: "Graphic Design",
    description: "Professional medical facility advertisement and info poster.",
    localPath: "./public/images/graphics/g6.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 15
  },
  {
    title: "Patna Arts Ad Creative",
    category: "Graphic Design",
    description: "Business services promotional graphic with bold typography.",
    localPath: "./public/images/graphics/g7.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 16
  },
  {
    title: "Ather Scooter Offer",
    category: "Graphic Design",
    description: "Automotive sales and promotional offer creative.",
    localPath: "./public/images/graphics/g8.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 17
  },
  {
    title: "Raj Multimedia Portfolio",
    category: "Graphic Design",
    description: "Studio service list and booking advertisement graphic.",
    localPath: "./public/images/graphics/g9.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 18
  },
  {
    title: "Chaat Offer Poster",
    category: "Graphic Design",
    description: "Food styling promotional poster for street food cafe.",
    localPath: "./public/images/graphics/g10.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 19
  },
  {
    title: "Event & Wedding Planner Ad",
    category: "Graphic Design",
    description: "Elegant service offering poster for event planning.",
    localPath: "./public/images/graphics/g11.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 20
  },
  {
    title: "Women's Day Special Offer",
    category: "Graphic Design",
    description: "Holiday specific marketing campaign creative.",
    localPath: "./public/images/graphics/g12.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 21
  },
  {
    title: "Happy Holi Wishes",
    category: "Graphic Design",
    description: "Colorful festival greeting graphic for brand engagement.",
    localPath: "./public/images/graphics/g13.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 22
  },
  {
    title: "10K Followers Milestone",
    category: "Graphic Design",
    description: "Community appreciation graphic for hitting 10,000 followers.",
    localPath: "./public/images/graphics/g14.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 23
  },
  {
    title: "iPhone Giveaway / Offer",
    category: "Graphic Design",
    description: "High-contrast promotional graphic for mobile store.",
    localPath: "./public/images/graphics/g15.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 24
  },
  {
    title: "Comedy Journey 10K Milestone",
    category: "Graphic Design",
    description: "Personal brand milestone celebration graphic.",
    localPath: "./public/images/graphics/g16.webp",
    mediaType: "image",
    folder: "editverse_portfolio/graphics",
    order: 25
  }
];

const runMigration = async () => {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected.');

    console.log('\n--- SEEDING REMAINING PORTFOLIO DATABASE ---');

    for (const item of portfolioItems) {
      console.log(`⏳ Uploading ${item.localPath}...`);
      
      try {
        // FIXED: Switched back to standard upload which properly returns the secure_url for small files
        const uploadResult = await cloudinary.uploader.upload(item.localPath, {
          folder: item.folder,
          resource_type: "auto" 
        });

        const newProject = new Project({
          title: item.title,
          category: item.category,
          description: item.description,
          mediaUrl: uploadResult.secure_url,
          mediaType: item.mediaType,
          order: item.order
        });

        await newProject.save();
        console.log(`💾 Saved "${item.title}" to MongoDB.`);
        
      } catch (uploadError) {
        console.error(`⚠️ Failed to upload ${item.localPath}. Skipping...`);
        console.error(`   Error details: ${uploadError.message}`);
      }
    }

    console.log('\n🎉 MIGRATION COMPLETE! 🎉');
    console.log('All remaining files have been uploaded and saved.');
    process.exit(0);

  } catch (error) {
    console.error('❌ Migration Failed:', error);
    process.exit(1);
  }
};

runMigration();