"use client";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Delete from "../Modals/delete";
import { toast } from "react-toastify";

const PostsTable = ({ posts, setReload, reload }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productId, setProductId] = useState(null);

  const handleDeleteClick = (id) => {
    setIsModalOpen(true);
    setProductId(id);
  };

  const handleDelete = async () => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
      setIsModalOpen(false);
      toast.success("Deleted!");
    }, 2000);
    // try {
    //   const { data } = await axiosInstance.delete(
    //     `/posts/${productId}?force=true`,
    //   );
    //   setReload(!reload);
    //   setLoading(false);
    // } catch (error) {
    //   console.log(error);

    //   const message =
    //     error?.response?.data?.errors?.[0]?.message || "Something went wrong";
    //   errorMessage(message);
    //   console.log(error);
    //   setLoading(false);
    // }
  };

  return (
    <div className='rounded-[10px] bg-white drop-shadow-1 border-l border-slate-300 dark:border-slate-700 dark:bg-boxdark dark:drop-shadow-none border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5 transition-colors duration-300'>
      <div className='max-w-full overflow-x-auto overflow-y-hidden'>
        <table className='w-full table-auto'>
          <thead>
            <tr className='bg-[#F7F9FC] dark:bg-black text-left dark:bg-dark-2 transition-colors duration-300'>
              <th className='min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5'>
                Title
              </th>
              <th className='min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white'>
                Category
              </th>
              <th className='min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white'>
                CreatedAt
              </th>
              <th className='min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white'>
                UpdatedAt
              </th>
              <th className='min-w-[120px] px-4 py-4 text-right font-medium text-dark dark:text-white xl:pr-7.5'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr key={post?._id}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === post.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className='text-dark dark:text-white'>{post.title}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === post.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className='text-dark dark:text-white'>
                    {post?.category || ""}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === post.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className='text-dark dark:text-white'>
                    {post?.createdAt
                      ? new Date(post.createdAt).toISOString().split("T")[0]
                      : ""}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${
                    index === post.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <p className='text-dark dark:text-white'>
                    {post?.updatedAt
                      ? new Date(post.updatedAt).toISOString().split("T")[0]
                      : ""}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${
                    index === post.length - 1 ? "border-b-0" : "border-b"
                  }`}
                >
                  <div className='flex items-center justify-end space-x-3.5'>
                    {/* Details button */}
                    <div className='group relative'>
                      <NavLink to={`/post/details/1`}>
                        <button className='mt-[7px] hover:text-primary'>
                          <svg
                            className='fill-current'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M9.99935 6.87492C8.27346 6.87492 6.87435 8.27403 6.87435 9.99992C6.87435 11.7258 8.27346 13.1249 9.99935 13.1249C11.7252 13.1249 13.1243 11.7258 13.1243 9.99992C13.1243 8.27403 11.7252 6.87492 9.99935 6.87492ZM8.12435 9.99992C8.12435 8.96438 8.96382 8.12492 9.99935 8.12492C11.0349 8.12492 11.8743 8.96438 11.8743 9.99992C11.8743 11.0355 11.0349 11.8749 9.99935 11.8749C8.96382 11.8749 8.12435 11.0355 8.12435 9.99992Z'
                              fill=''
                            />
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M9.99935 2.70825C6.23757 2.70825 3.70376 4.96175 2.23315 6.8723L2.20663 6.90675C1.87405 7.3387 1.56773 7.73652 1.35992 8.20692C1.13739 8.71064 1.04102 9.25966 1.04102 9.99992C1.04102 10.7402 1.13739 11.2892 1.35992 11.7929C1.56773 12.2633 1.87405 12.6611 2.20664 13.0931L2.23316 13.1275C3.70376 15.0381 6.23757 17.2916 9.99935 17.2916C13.7611 17.2916 16.2949 15.0381 17.7655 13.1275L17.792 13.0931C18.1246 12.6612 18.431 12.2633 18.6388 11.7929C18.8613 11.2892 18.9577 10.7402 18.9577 9.99992C18.9577 9.25966 18.8613 8.71064 18.6388 8.20692C18.431 7.73651 18.1246 7.33868 17.792 6.90673L17.7655 6.8723C16.2949 4.96175 13.7611 2.70825 9.99935 2.70825ZM3.2237 7.63475C4.58155 5.87068 6.79132 3.95825 9.99935 3.95825C13.2074 3.95825 15.4172 5.87068 16.775 7.63475C17.1405 8.10958 17.3546 8.3933 17.4954 8.71204C17.627 9.00993 17.7077 9.37403 17.7077 9.99992C17.7077 10.6258 17.627 10.9899 17.4954 11.2878C17.3546 11.6065 17.1405 11.8903 16.775 12.3651C15.4172 14.1292 13.2074 16.0416 9.99935 16.0416C6.79132 16.0416 4.58155 14.1292 3.2237 12.3651C2.85821 11.8903 2.64413 11.6065 2.50332 11.2878C2.37171 10.9899 2.29102 10.6258 2.29102 9.99992C2.29102 9.37403 2.37171 9.00993 2.50332 8.71204C2.64413 8.3933 2.85821 8.10958 3.2237 7.63475Z'
                              fill=''
                            />
                          </svg>
                        </button>
                      </NavLink>

                      <span className='absolute left-1/2 top-full w-[80px] -translate-x-1/2 transform rounded  bg-gray-7 px-2 py-1 text-xs text-white opacity-0 transition-opacity  duration-500 group-hover:opacity-100 dark:bg-white dark:text-gray-700'>
                        More details
                      </span>
                    </div>

                    {/* Update button */}
                    <div className='group relative'>
                      <NavLink to={`/post/update/1`}>
                        <button className='mt-[7px] hover:text-primary'>
                          <svg
                            className='fill-current'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M9.95153 1.0415L11.2493 1.0415C11.5945 1.0415 11.8743 1.32133 11.8743 1.6665C11.8743 2.01168 11.5945 2.2915 11.2493 2.2915H9.99935C8.01749 2.2915 6.59398 2.29283 5.51066 2.43848C4.44533 2.58171 3.80306 2.85412 3.32835 3.32883C2.85363 3.80355 2.58122 4.44582 2.43799 5.51115C2.29234 6.59447 2.29102 8.01798 2.29102 9.99984C2.29102 11.9817 2.29234 13.4052 2.43799 14.4885C2.58122 15.5539 2.85363 16.1961 3.32835 16.6708C3.80306 17.1456 4.44533 17.418 5.51066 17.5612C6.59398 17.7068 8.01749 17.7082 9.99935 17.7082C11.9812 17.7082 13.4047 17.7068 14.488 17.5612C15.5534 17.418 16.1956 17.1456 16.6704 16.6708C17.1451 16.1961 17.4175 15.5539 17.5607 14.4885C17.7064 13.4052 17.7077 11.9817 17.7077 9.99984V8.74984C17.7077 8.40466 17.9875 8.12484 18.3327 8.12484C18.6779 8.12484 18.9577 8.40466 18.9577 8.74984V10.0476C18.9577 11.9713 18.9577 13.4788 18.7996 14.6551C18.6377 15.859 18.2999 16.809 17.5542 17.5547C16.8086 18.3004 15.8585 18.6382 14.6546 18.8C13.4784 18.9582 11.9708 18.9582 10.0472 18.9582H9.95154C8.02788 18.9582 6.52034 18.9582 5.3441 18.8C4.14016 18.6382 3.19014 18.3004 2.44446 17.5547C1.69879 16.809 1.361 15.859 1.19914 14.6551C1.041 13.4788 1.04101 11.9713 1.04102 10.0477V9.95202C1.04101 8.02836 1.041 6.52083 1.19914 5.34459C1.361 4.14065 1.69879 3.19063 2.44446 2.44495C3.19014 1.69928 4.14016 1.36149 5.3441 1.19963C6.52034 1.04148 8.02787 1.04149 9.95153 1.0415ZM13.9748 1.89643C15.1147 0.756528 16.9628 0.756528 18.1028 1.89643C19.2427 3.03634 19.2427 4.88449 18.1028 6.02439L12.5627 11.5645C12.2533 11.8739 12.0595 12.0678 11.8432 12.2365C11.5884 12.4352 11.3128 12.6055 11.0211 12.7445C10.7735 12.8625 10.5135 12.9492 10.0983 13.0875L7.6779 13.8943C7.23103 14.0433 6.73835 13.927 6.40528 13.5939C6.0722 13.2608 5.95589 12.7682 6.10485 12.3213L6.91166 9.90086C7.05001 9.48572 7.13667 9.22566 7.25468 8.97805C7.39367 8.6864 7.56402 8.41077 7.76272 8.15602C7.93142 7.93973 8.12527 7.74591 8.43472 7.4365L13.9748 1.89643ZM17.2189 2.78032C16.5671 2.12857 15.5104 2.12857 14.8587 2.78032L14.5448 3.09417C14.5637 3.17405 14.5902 3.26923 14.627 3.37539C14.7465 3.71961 14.9725 4.17293 15.3994 4.59983C15.8263 5.02673 16.2796 5.25272 16.6238 5.37215C16.73 5.40898 16.8251 5.43544 16.905 5.45436L17.2189 5.14051C17.8706 4.48876 17.8706 3.43207 17.2189 2.78032ZM15.9203 6.43908C15.4903 6.25417 14.9895 5.95772 14.5155 5.48372C14.0415 5.00971 13.745 4.50886 13.5601 4.07888L9.34727 8.29172C9.00018 8.63881 8.86405 8.77647 8.74836 8.92479C8.6055 9.10795 8.48302 9.30613 8.38308 9.51582C8.30215 9.68564 8.23991 9.86895 8.08469 10.3346L7.72477 11.4144L8.58482 12.2744L9.66456 11.9145C10.1302 11.7593 10.3136 11.697 10.4834 11.6161C10.6931 11.5162 10.8912 11.3937 11.0744 11.2508C11.2227 11.1351 11.3604 10.999 11.7075 10.6519L15.9203 6.43908Z'
                              fill=''
                            />
                          </svg>
                        </button>
                      </NavLink>

                      <span className='absolute left-1/2 top-full w-[55px] -translate-x-1/2 transform rounded  bg-gray-7 px-2 py-1 text-xs text-white opacity-0 transition-opacity  duration-500 group-hover:opacity-100 dark:bg-white dark:text-gray-700'>
                        Update
                      </span>
                    </div>

                    {/* Delete button */}
                    <div className='group relative'>
                      <button
                        className='mt-[7px] hover:text-primary'
                        onClick={() => handleDeleteClick(post._id)}
                      >
                        <svg
                          className='fill-current'
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M8.59048 1.87502H11.4084C11.5887 1.8749 11.7458 1.8748 11.8941 1.89849C12.4802 1.99208 12.9874 2.35762 13.2615 2.88403C13.3309 3.01727 13.3805 3.16634 13.4374 3.33745L13.5304 3.61654C13.5461 3.66378 13.5506 3.67715 13.5545 3.68768C13.7004 4.09111 14.0787 4.36383 14.5076 4.3747C14.5189 4.37498 14.5327 4.37503 14.5828 4.37503H17.0828C17.4279 4.37503 17.7078 4.65485 17.7078 5.00003C17.7078 5.34521 17.4279 5.62503 17.0828 5.62503H2.91602C2.57084 5.62503 2.29102 5.34521 2.29102 5.00003C2.29102 4.65485 2.57084 4.37503 2.91602 4.37503H5.41609C5.46612 4.37503 5.47993 4.37498 5.49121 4.3747C5.92009 4.36383 6.29844 4.09113 6.44437 3.6877C6.44821 3.67709 6.45262 3.66401 6.46844 3.61654L6.56145 3.33747C6.61836 3.16637 6.66795 3.01728 6.73734 2.88403C7.01146 2.35762 7.51862 1.99208 8.1047 1.89849C8.25305 1.8748 8.41016 1.8749 8.59048 1.87502ZM7.50614 4.37503C7.54907 4.29085 7.5871 4.20337 7.61983 4.1129C7.62977 4.08543 7.63951 4.05619 7.65203 4.01861L7.7352 3.7691C7.81118 3.54118 7.82867 3.49469 7.84602 3.46137C7.9374 3.2859 8.10645 3.16405 8.30181 3.13285C8.33892 3.12693 8.38854 3.12503 8.6288 3.12503H11.37C11.6103 3.12503 11.6599 3.12693 11.697 3.13285C11.8924 3.16405 12.0614 3.2859 12.1528 3.46137C12.1702 3.49469 12.1877 3.54117 12.2636 3.7691L12.3468 4.01846L12.379 4.11292C12.4117 4.20338 12.4498 4.29085 12.4927 4.37503H7.50614Z'
                            fill=''
                          />
                          <path
                            d='M4.92859 7.04179C4.90563 6.69738 4.60781 6.43679 4.2634 6.45975C3.91899 6.48271 3.6584 6.78053 3.68136 7.12494L4.06757 12.9181C4.13881 13.987 4.19636 14.8505 4.33134 15.528C4.47167 16.2324 4.71036 16.8208 5.20335 17.2821C5.69635 17.7433 6.2993 17.9423 7.01151 18.0355C7.69653 18.1251 8.56189 18.125 9.63318 18.125H10.3656C11.4369 18.125 12.3023 18.1251 12.9873 18.0355C13.6995 17.9423 14.3025 17.7433 14.7955 17.2821C15.2885 16.8208 15.5272 16.2324 15.6675 15.528C15.8025 14.8505 15.86 13.987 15.9313 12.9181L16.3175 7.12494C16.3404 6.78053 16.0798 6.48271 15.7354 6.45975C15.391 6.43679 15.0932 6.69738 15.0702 7.04179L14.687 12.7911C14.6121 13.9143 14.5587 14.6958 14.4416 15.2838C14.328 15.8542 14.1693 16.1561 13.9415 16.3692C13.7137 16.5824 13.4019 16.7206 12.8252 16.796C12.2307 16.8738 11.4474 16.875 10.3217 16.875H9.67718C8.55148 16.875 7.76814 16.8738 7.17364 16.796C6.59697 16.7206 6.28518 16.5824 6.05733 16.3692C5.82949 16.1561 5.67088 15.8542 5.55725 15.2838C5.44011 14.6958 5.38675 13.9143 5.31187 12.7911L4.92859 7.04179Z'
                            fill=''
                          />
                          <path
                            d='M7.8539 8.5448C8.19737 8.51045 8.50364 8.76104 8.53799 9.10451L8.95466 13.2712C8.989 13.6146 8.73841 13.9209 8.39495 13.9553C8.05148 13.9896 7.74521 13.739 7.71086 13.3956L7.29419 9.22889C7.25985 8.88542 7.51044 8.57915 7.8539 8.5448Z'
                            fill=''
                          />
                          <path
                            d='M12.1449 8.5448C12.4884 8.57915 12.739 8.88542 12.7047 9.22889L12.288 13.3956C12.2536 13.739 11.9474 13.9896 11.6039 13.9553C11.2604 13.9209 11.0098 13.6146 11.0442 13.2712L11.4609 9.10451C11.4952 8.76104 11.8015 8.51045 12.1449 8.5448Z'
                            fill=''
                          />
                        </svg>
                      </button>

                      <span className='absolute left-1/2 top-full w-[50px] -translate-x-1/2 transform rounded  bg-gray-7 px-2 py-1 text-xs text-white opacity-0 transition-opacity  duration-500 group-hover:opacity-100 dark:bg-white dark:text-gray-700'>
                        Delete
                      </span>
                    </div>

                    {/* Modal */}
                    {/* isModalOpen  */}
                    <Delete
                      opened={isModalOpen}
                      setOpend={setIsModalOpen}
                      title='Post Delete'
                      handleDelete={handleDelete}
                      loading={loading}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostsTable;
